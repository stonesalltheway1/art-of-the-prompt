import { PDFSection } from './pdf-generator'

export const mainGuideContent = {
  title: "The Professional's Guide to AI Communication",
  subtitle: "Master the 5 Pillars • Leverage Professional Templates • Execute High-Value Tasks",
  author: "Eric Keller",
  
  sections: [
    {
      title: "Introduction: Why Most AI Interactions Fail",
      content: `Most professionals approach AI like they're talking to a search engine. They type in vague requests like "help me with marketing" or "write something about productivity" and wonder why they get generic, unhelpful responses.

The problem isn't the AI—it's the communication.

After working with thousands of professionals and analyzing what separates those who get exceptional AI results from those who struggle, I've identified a clear pattern. The difference comes down to five fundamental principles that transform ordinary prompts into professional-grade instructions.

This guide will teach you those principles and give you the tools to implement them immediately. You'll learn how to communicate with AI like a professional, get consistent results, and save hours of back-and-forth refinement.

By the end of this guide, you'll have:
• A systematic approach to crafting effective prompts
• 25+ ready-to-use professional templates
• A quality checklist to ensure consistent results
• The confidence to tackle complex AI-assisted projects

Let's begin.`,
      type: 'text' as const
    },
    
    {
      title: "The 5 Pillars of Professional AI Communication",
      content: `Professional AI communication isn't about knowing the right "tricks" or memorizing complex formulas. It's about understanding five fundamental principles that, when applied together, create clear, effective instructions that consistently produce high-quality results.

Think of these as the foundation of every successful AI interaction:`,
      type: 'text' as const
    },
    
    {
      title: "Pillar 1: Clarity",
      content: `🎯 ELIMINATE AMBIGUITY, DEFINE OBJECTIVES

The first pillar is about making your intentions crystal clear. Ambiguous language is the enemy of good AI output.

Instead of: "Write something about email marketing"
Try this: "Write a 300-word blog post about email segmentation strategies for B2B SaaS companies, focusing on behavioral triggers and conversion optimization"

Key Elements:
• Use specific, actionable language
• Define technical terms when necessary
• State single, clear objectives
• Avoid passive voice
• Include measurable outcomes when relevant

The clarity test: Could someone unfamiliar with your project understand exactly what you want?`,
      type: 'callout' as const,
      color: '#2563EB'
    },
    
    {
      title: "Pillar 2: Context",
      content: `📚 PROVIDE BACKGROUND, ESTABLISH EXPERTISE

Context transforms generic AI responses into tailored, professional output. This pillar is about setting the stage for success.

Instead of: "Analyze this data"
Try this: "As a data analyst with 5 years of e-commerce experience, analyze this Q3 sales data to identify trends and recommend strategies for Q4 growth in the home goods category"

Essential Context Elements:
• Role/persona establishment ("As a marketing manager...")
• Industry or domain specifics
• Target audience definition
• Relevant constraints or limitations
• Background information that affects the response

Pro tip: The more specific your context, the more valuable your output becomes.`,
      type: 'callout' as const,
      color: '#10B981'
    },
    
    {
      title: "Pillar 3: Examples",
      content: `📝 SHOW, DON'T JUST TELL

Examples are the bridge between your vision and AI execution. They demonstrate quality standards and format expectations.

Effective Example Strategy:
• Provide 2-3 high-quality examples
• Show the exact format you want
• Include both good and poor examples when helpful
• Demonstrate edge cases or variations
• Use examples from your specific domain

Template Structure:
"Write product descriptions following this format:

Example 1: [Your best product description]
Example 2: [Another strong example]

Now write one for: [Your new product]"

Remember: Examples set the quality bar for your output.`,
      type: 'example' as const
    },
    
    {
      title: "Pillar 4: Constraints",
      content: `⚖️ SET BOUNDARIES, DEFINE LIMITS

Constraints aren't limitations—they're quality controls. They ensure your output meets professional standards and fits your specific needs.

Critical Constraints:
• Length specifications (word count, character limits)
• Style guidelines (formal, conversational, technical)
• Format requirements (bullets, paragraphs, tables)
• Quality thresholds (reading level, complexity)
• Inclusion/exclusion criteria

Example with Strong Constraints:
"Write a 150-word executive summary in formal business tone, using bullet points for key findings, with no jargon, suitable for C-level executives who have 30 seconds to review"

The constraint test: Are your boundaries specific enough to prevent scope creep?`,
      type: 'callout' as const,
      color: '#F59E0B'
    },
    
    {
      title: "Pillar 5: Iteration",
      content: `🔄 PLAN FOR REFINEMENT, EXPECT IMPROVEMENT

Professional AI communication is rarely a one-shot process. The fifth pillar is about building improvement into your workflow.

Iteration Strategy:
• Plan for 2-3 refinement rounds
• Define what "good enough" looks like
• Prepare follow-up questions in advance
• Create feedback mechanisms
• Document successful patterns for reuse

Iteration Framework:
1. Initial prompt with clear success criteria
2. Review output against objectives
3. Identify specific improvement areas
4. Refine with targeted feedback
5. Test and validate results

Success Metrics to Track:
• First-try success rate
• Average refinement rounds needed
• Time to desired output
• Quality satisfaction scores

Remember: The goal isn't perfection on the first try—it's consistent improvement toward professional standards.`,
      type: 'callout' as const,
      color: '#8B5CF6'
    },
    
    {
      title: "The Professional Prompt Formula",
      content: `Now that you understand the five pillars, here's how to combine them into a systematic approach:

[ROLE] + [CONTEXT] + [TASK] + [FORMAT] + [CONSTRAINTS] + [EXAMPLES]

Let's break this down:

ROLE: "As a marketing expert with 10 years of SaaS experience..."
CONTEXT: "...working with remote teams who struggle with productivity tools..."
TASK: "...write a LinkedIn post about AI productivity tools..."
FORMAT: "...using a conversational tone with 3 actionable tips..."
CONSTRAINTS: "...keep it under 150 words and end with an engagement question..."
EXAMPLES: "...following the style of this successful post: [example]"

Result: A complete, professional prompt that consistently produces high-quality output.`,
      type: 'code' as const
    },
    
    {
      title: "Implementation Roadmap: Your First 30 Days",
      content: `Week 1: Foundation Building
□ Master the 5 Pillars framework
□ Practice with 3 different prompt types
□ Document your most common use cases
□ Set up your prompt template library

Week 2: Template Development  
□ Create 5 custom templates for your role
□ Test templates with real projects
□ Refine based on results
□ Share successful patterns with your team

Week 3: Advanced Techniques
□ Experiment with chain-of-thought prompting
□ Try persona layering for complex tasks
□ Practice few-shot prompting with examples
□ Develop feedback loops for iteration

Week 4: System Integration
□ Build prompt templates into your workflow
□ Create quality checklists for common tasks
□ Train team members on best practices
□ Measure and optimize your success metrics

Success Metrics to Track:
• Time saved per AI interaction
• Quality improvement scores
• First-try success rate
• Team adoption and satisfaction`,
      type: 'checklist' as const
    },
    
    {
      title: "Professional Templates: Quick Start Guide",
      content: `Here are five essential templates to get you started immediately:

1. CONTENT CREATION TEMPLATE
"As a [ROLE] with [EXPERIENCE] in [INDUSTRY], create [CONTENT TYPE] about [TOPIC] for [AUDIENCE]. Use [TONE], include [SPECIFIC ELEMENTS], and keep it [LENGTH]. Format as [STRUCTURE]. Success criteria: [MEASURABLE OUTCOMES]."

2. ANALYSIS TEMPLATE  
"As a [ANALYST TYPE], analyze [DATA/CONTENT] to [OBJECTIVE]. Consider [CONTEXT FACTORS], focus on [KEY AREAS], and provide [DELIVERABLE TYPE]. Include actionable recommendations for [STAKEHOLDER]. Present findings in [FORMAT]."

3. STRATEGY TEMPLATE
"As a [STRATEGIC ROLE], develop a [STRATEGY TYPE] for [ORGANIZATION/PROJECT] to achieve [GOAL] within [TIMEFRAME]. Consider [CONSTRAINTS], target [AUDIENCE], and include [REQUIRED ELEMENTS]. Provide implementation roadmap with [SPECIFICS]."

4. COMMUNICATION TEMPLATE
"As a [COMMUNICATION ROLE], write [MESSAGE TYPE] for [AUDIENCE] about [TOPIC]. Use [TONE], address [KEY CONCERNS], and include [CALL TO ACTION]. Keep it [LENGTH] and optimize for [CHANNEL/MEDIUM]."

5. PROBLEM-SOLVING TEMPLATE
"As a [EXPERT TYPE], solve [PROBLEM] for [CONTEXT]. Consider [CONSTRAINTS], evaluate [OPTIONS], and recommend [SOLUTION TYPE]. Provide step-by-step implementation with [SUCCESS METRICS]."

Customization Tips:
• Replace bracketed placeholders with your specifics
• Adjust complexity based on your needs
• Add industry-specific constraints
• Include relevant examples when helpful`,
      type: 'code' as const
    },
    
    {
      title: "Quality Assurance: Your Professional Checklist",
      content: `Before sending any prompt, run through this quality checklist:

CLARITY CHECK:
□ Is the objective crystal clear?
□ Are technical terms defined?
□ Would someone unfamiliar understand this?
□ Is there only one primary objective?

CONTEXT CHECK:
□ Is the role/persona established?
□ Is sufficient background provided?
□ Are constraints clearly stated?
□ Is the target audience defined?

EXAMPLES CHECK:
□ Are quality standards demonstrated?
□ Is the desired format shown?
□ Are examples relevant and current?
□ Do examples match the complexity level?

CONSTRAINTS CHECK:
□ Are length limits specified?
□ Are style guidelines clear?
□ Are format requirements stated?
□ Are quality thresholds defined?

ITERATION CHECK:
□ Are success criteria defined?
□ Is feedback mechanism planned?
□ Are follow-up questions prepared?
□ Is improvement strategy outlined?

POST-PROMPT REVIEW:
□ Does output meet objectives?
□ Are quality standards achieved?
□ Is format appropriate?
□ Are next steps clear?`,
      type: 'checklist' as const
    },
    
    {
      title: "Next Steps: Building Your AI Communication System",
      content: `Congratulations! You now have the foundation for professional AI communication. Here's how to continue building your expertise:

IMMEDIATE ACTIONS:
1. Download the complete Professional Prompting Pack
2. Join our community of AI professionals
3. Start implementing the 5 Pillars in your daily work
4. Track your success metrics and improvement

ONGOING DEVELOPMENT:
• Practice with different AI models and platforms
• Share successful templates with your team
• Contribute to the community knowledge base
• Stay updated on AI communication best practices

RESOURCES FOR CONTINUED LEARNING:
• Full book: "The Art of the Prompt" on Amazon
• Community access: PromptLabBook.com/community
• Weekly newsletter: Advanced techniques and case studies
• Workshop series: Live training and Q&A sessions

Remember: Professional AI communication is a skill that improves with practice. Start with the fundamentals, build your template library, and iterate based on results.

The future belongs to professionals who can effectively collaborate with AI. You now have the tools to be one of them.

Ready to transform your AI interactions? Get the complete toolkit and join thousands of professionals already using these techniques to amplify their work.`,
      type: 'text' as const
    }
  ] as PDFSection[]
}

export const quickReferenceContent = {
  title: "Professional AI Communication - Quick Reference",
  sections: [
    {
      title: "The 5 Pillars Framework",
      content: `🎯 CLARITY: Eliminate ambiguity, define objectives
📚 CONTEXT: Provide background, establish expertise  
📝 EXAMPLES: Show, don't just tell
⚖️ CONSTRAINTS: Set boundaries, define limits
🔄 ITERATION: Plan for refinement, expect improvement

EMERGENCY FORMULA:
[ROLE] + [CONTEXT] + [TASK] + [FORMAT] + [CONSTRAINTS] + [EXAMPLES]

QUALITY CHECK QUESTIONS:
• Is this crystal clear to someone unfamiliar?
• Do I have enough background information?
• Am I showing what I want, not just telling?
• Are my boundaries specific enough?
• Do I have a plan for improvement?`,
      type: 'callout' as const
    },
    
    {
      title: "Professional Prompting Checklist",
      content: `PRE-PROMPT PREPARATION:
□ Clear objective defined
□ Target audience identified  
□ Desired outcome specified
□ Success criteria established
□ Relevant background data collected
□ Key constraints identified
□ Examples or references prepared

THE 5 PILLARS VERIFICATION:
□ Instructions are unambiguous
□ Background information provided
□ Few-shot examples included (if applicable)
□ Length limits specified
□ Refinement strategy prepared

TECHNICAL OPTIMIZATION:
□ Logical flow maintained
□ Key information prioritized
□ Redundancy eliminated
□ Readability optimized

POST-PROMPT REVIEW:
□ Output meets objectives
□ Quality standards achieved
□ Format requirements satisfied
□ Context appropriately applied
□ Improvement areas identified`,
      type: 'checklist' as const
    }
  ] as PDFSection[]
}

export const promptLibraryContent = {
  title: "Professional Prompt Library - 25 Copy-Paste Templates",
  categories: [
    {
      name: "Writing & Content Creation",
      prompts: [
        {
          title: "Blog Post Generator",
          difficulty: 2,
          useCase: "Content Marketing",
          template: `As a content marketing expert with 10 years of experience in [INDUSTRY], write a comprehensive blog post about [TOPIC].

Target audience: [AUDIENCE]
Word count: [NUMBER] words
Tone: [TONE - professional, conversational, authoritative]

Structure:
- Compelling headline with emotional hook
- Introduction that addresses reader pain points
- 3-5 main sections with actionable insights
- Conclusion with clear next steps
- Include relevant statistics and examples

Focus on providing genuine value while subtly positioning [BRAND/PRODUCT] as the solution.`,
          customization: "Replace [INDUSTRY], [TOPIC], [AUDIENCE], [NUMBER], [TONE], and [BRAND/PRODUCT] with your specific details."
        },
        {
          title: "Email Campaign Series",
          difficulty: 3,
          useCase: "Email Marketing",
          template: `As an email marketing specialist, create a 5-email nurture sequence for [PRODUCT/SERVICE] targeting [AUDIENCE].

Email 1: Welcome & Value
Email 2: Problem/Solution  
Email 3: Social Proof
Email 4: Urgency/Scarcity
Email 5: Clear CTA

Each email should be 150-200 words, mobile-optimized, and include:
- Subject line (under 50 characters)
- Preheader text
- Personalization opportunities
- Clear value proposition
- Single, focused CTA`,
          customization: "Specify your product/service and target audience. Adjust email count and word limits as needed."
        }
      ]
    },
    {
      name: "Research & Analysis", 
      prompts: [
        {
          title: "Market Research Report",
          difficulty: 3,
          useCase: "Business Strategy",
          template: `As a market research analyst, conduct a comprehensive analysis of [INDUSTRY/MARKET].

Research areas:
- Market size and growth trends
- Key players and competitive landscape
- Customer segments and personas
- Pricing strategies
- Distribution channels
- Emerging opportunities and threats

Provide actionable insights and recommendations for [COMPANY] to capitalize on opportunities and mitigate risks.`,
          customization: "Replace [INDUSTRY/MARKET] and [COMPANY] with your specific focus areas."
        }
      ]
    }
  ]
}
