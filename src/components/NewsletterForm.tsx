"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { trackLead } from "@/lib/analytics"
import { getStoredUTMParams } from "@/lib/ab-test"

interface NewsletterFormProps {
  variant?: "default" | "compact" | "inline"
  showPrivacy?: boolean
  showConsent?: boolean
  placeholder?: string
  buttonText?: string
  className?: string
}

export default function NewsletterForm({
  variant = "default",
  showPrivacy = true,
  showConsent = true,
  placeholder = "Enter your email address",
  buttonText = "Get the Starter Pack",
  className = "",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus("error")
       setErrorMessage("Please enter your email address")
      return
    }

    if (showConsent && !consent) {
      setStatus("error")
      setErrorMessage("Please accept the privacy policy to continue")
      return
    }

    setIsSubmitting(true)
    setStatus("idle")

    try {
      const utmParams = getStoredUTMParams()
      
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          consent,
          ...utmParams,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        trackLead()
        
        // Redirect to thank you page after a short delay
        setTimeout(() => {
          window.location.href = "/thank-you-optin"
        }, 2000)
      } else {
        setStatus("error")
        setErrorMessage(data.message || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (status === "success") {
    return (
      <div className={`text-center ${className}`}>
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Check your email!
        </h3>
        <p className="text-gray-600">
           We&apos;ve sent the Starter Pack to {email}. Redirecting you to the download page...
        </p>
      </div>
    )
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
        <div className="flex space-x-2">
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              buttonText
            )}
          </Button>
        </div>
         {status === "error" && (
          <p className="text-sm text-red-600 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errorMessage}
          </p>
        )}
      </form>
    )
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className={`flex space-x-2 ${className}`}>
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            buttonText
          )}
        </Button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="space-y-3">
        <div>
          <Label htmlFor="firstName" className="sr-only">
            First Name
          </Label>
          <Input
            id="firstName"
            type="text"
            placeholder="First name (optional)"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="email" className="sr-only">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      {showConsent && (
        <div className="flex items-start space-x-2">
          <Checkbox
            id="consent"
            checked={consent}
            onCheckedChange={(checked) => setConsent(checked as boolean)}
            required
          />
          <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
             I agree to receive emails from Eric Keller about AI communication tips and book updates.{' '}
            {showPrivacy && (
              <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                Privacy Policy
              </a>
            )}
          </Label>
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Subscribing...
          </>
        ) : (
          <>
            <Mail className="h-4 w-4 mr-2" />
            {buttonText}
          </>
        )}
      </Button>

      {status === "error" && (
        <div className="text-sm text-red-600 flex items-start">
          <AlertCircle className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
          {errorMessage}
        </div>
      )}

      {showPrivacy && (
        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      )}
    </form>
  )
}
