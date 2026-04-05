import {
  routeToAgent,
  buildAgentPrompt,
  getAgent,
  type AgentRequest,
  type AgentResponse,
  type AgentType,
  type UserRole,
} from "@/lib/agents";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.message || typeof body.message !== "string") {
      return Response.json(
        { error: "Missing or invalid 'message' field. Must be a non-empty string." },
        { status: 400 },
      );
    }

    const agentRequest: AgentRequest = {
      message: body.message,
      agentType: isValidAgentType(body.agentType) ? body.agentType : undefined,
      userRole: isValidUserRole(body.userRole) ? body.userRole : "unknown",
      sessionId: body.sessionId ?? undefined,
      context: body.context ?? undefined,
    };

    // Route to the appropriate agent
    const targetAgent = routeToAgent(agentRequest);
    const agent = getAgent(targetAgent);

    // Build the full prompt (would be sent to the LLM in production)
    const systemPrompt = buildAgentPrompt(
      targetAgent,
      agentRequest.userRole,
      agentRequest.context,
    );

    // Check guardrails before responding
    const guardrailsChecked = agent.guardrails.map((g) => g.id);

    // Placeholder response — in production this calls the LLM with systemPrompt
    const placeholderResponse = generatePlaceholderResponse(
      targetAgent,
      agentRequest,
    );

    const response: AgentResponse = {
      agent: targetAgent,
      message: placeholderResponse,
      routedFrom:
        agentRequest.agentType && agentRequest.agentType !== targetAgent
          ? agentRequest.agentType
          : undefined,
      tools_invoked: [],
      guardrails_checked: guardrailsChecked,
      metadata: {
        sessionId: agentRequest.sessionId,
        userRole: agentRequest.userRole,
        systemPromptLength: systemPrompt.length,
        availableTools: agent.tools.map((t) => t.name),
      },
    };

    return Response.json(response);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json(
        { error: "Invalid JSON in request body." },
        { status: 400 },
      );
    }
    console.error("Agent route error:", error);
    return Response.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}

// -----------------------------------------------------------------------------
// Placeholder response generator
// -----------------------------------------------------------------------------

function generatePlaceholderResponse(
  agentType: AgentType,
  request: AgentRequest,
): string {
  const responses: Record<AgentType, string> = {
    orchestrator: `Welcome to BundledCare. I'm here to help you navigate our platform. Based on your message, I'll connect you with the right specialist. Could you tell me whether you're a family member seeking care, a health system administrator, or a physician?`,

    intake: `I'd be happy to help you get started with a care assessment. Before we begin collecting any health information, I need to confirm: are you authorized to share health information on behalf of the person who will receive care? Once confirmed, we'll walk through health history, care needs, preferences, and a home environment review to build a personalized care plan.`,

    matching: `I'll help find the right caregiver match. Our matching system evaluates skills (30%), personality compatibility (20%), schedule alignment (25%), geographic proximity (15%), and language (10%). Let me search our caregiver pool based on the care plan requirements and present your top options.`,

    care: `I'm tracking the care coordination for this assignment. I can help with visit tracking, care plan monitoring, schedule changes, or escalating any concerns. What would you like to review or update?`,

    billing: `I can help with your BundledCare billing. This includes your 4-in-1 bundle invoice, HSA/FSA eligibility via Letter of Medical Necessity, encounter-level billing details, monthly statements, or co-op membership accounting. What billing question can I address?`,

    outcomes: `I'm monitoring care quality metrics across your BundledCare program. I can report on ER avoidance rates, caregiver retention, family satisfaction (NPS), care plan adherence, and cost savings. I can also benchmark against industry standards (CMS Home Health Compare, CAHPS). What metrics would you like to review?`,
  };

  return responses[agentType];
}

// -----------------------------------------------------------------------------
// Validation helpers
// -----------------------------------------------------------------------------

const VALID_AGENT_TYPES: AgentType[] = [
  "orchestrator",
  "intake",
  "matching",
  "care",
  "billing",
  "outcomes",
];

const VALID_USER_ROLES: UserRole[] = [
  "family",
  "health_system_admin",
  "surgeon",
  "unknown",
];

function isValidAgentType(value: unknown): value is AgentType {
  return typeof value === "string" && VALID_AGENT_TYPES.includes(value as AgentType);
}

function isValidUserRole(value: unknown): value is UserRole {
  return typeof value === "string" && VALID_USER_ROLES.includes(value as UserRole);
}
