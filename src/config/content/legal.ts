export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDocument {
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const REVIEW_NOTICE =
  "This is placeholder policy content provided as a starting structure. Replace it with content reviewed by qualified legal counsel before the site goes live.";

export const privacyPolicyContent: LegalDocument = {
  updated: "Not yet published",
  intro: REVIEW_NOTICE,
  sections: [
    {
      heading: "Information We Collect",
      body: [
        "Describe what information is collected when a customer browses the site, contacts support, or places an order (for example: contact details shared over Telegram or email).",
      ],
    },
    {
      heading: "How Information Is Used",
      body: ["Describe how any collected information is used — such as fulfilling orders and responding to support requests."],
    },
    {
      heading: "Information Sharing",
      body: ["State whether information is shared with third parties, and under what circumstances."],
    },
    {
      heading: "Contact",
      body: ["Explain how customers can reach out with privacy questions — see the Contact page."],
    },
  ],
};

export const termsOfServiceContent: LegalDocument = {
  updated: "Not yet published",
  intro: REVIEW_NOTICE,
  sections: [
    {
      heading: "Use of This Site",
      body: ["Describe acceptable use of the site and marketplace."],
    },
    {
      heading: "Products and Ordering",
      body: [
        "Describe how product listings, pricing, and the order process work — including that prices shown on the site are confirmed before an order is finalized.",
      ],
    },
    {
      heading: "Account Delivery",
      body: ["Describe delivery expectations and timing for ordered products."],
    },
    {
      heading: "Limitation of Liability",
      body: ["State the limits of liability for the business, reviewed by legal counsel."],
    },
  ],
};

export const refundPolicyContent: LegalDocument = {
  updated: "Not yet published",
  intro: REVIEW_NOTICE,
  sections: [
    {
      heading: "Eligibility",
      body: ["Describe which orders are eligible for a refund, and under what conditions."],
    },
    {
      heading: "How to Request a Refund",
      body: ["Explain how a customer should contact support to request a refund — see the Contact page."],
    },
    {
      heading: "Processing Time",
      body: ["State how refund requests are reviewed and how long processing takes once approved."],
    },
  ],
};
