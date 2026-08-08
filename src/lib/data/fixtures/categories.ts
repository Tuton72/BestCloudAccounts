import type { Category } from "@/types/catalog";

export const CATEGORIES: Category[] = [
  {
    id: "a0000000-0000-4000-8000-000000000001",
    name: "AWS Accounts",
    slug: "aws-accounts",
    description: "Ready-to-use AWS accounts across a range of compute tiers.",
    parentId: null,
    sortOrder: 1,
  },
  {
    id: "a0000000-0000-4000-8000-000000000002",
    name: "AWS AI Accounts",
    slug: "aws-ai-accounts",
    description: "AWS accounts pre-configured for AI/LLM workloads.",
    parentId: null,
    sortOrder: 2,
  },
  {
    id: "a0000000-0000-4000-8000-000000000003",
    name: "AWS Credit Accounts",
    slug: "aws-credit-accounts",
    description: "AWS accounts pre-loaded with promotional credit.",
    parentId: null,
    sortOrder: 3,
  },
];
