import type { ComponentType } from "react";
import { OvhcloudArticle } from "@/components/product/ovhcloud-article";
import { articleTags as ovhcloudTags } from "@/config/content/ovhcloud-article";
import { IbmCloudArticle } from "@/components/product/ibm-cloud-article";
import { articleTags as ibmCloudTags } from "@/config/content/ibm-cloud-article";
import { VerifiedICloudArticle } from "@/components/product/verified-icloud-article";
import { articleTags as verifiedICloudTags } from "@/config/content/verified-icloud-article";
import { AlibabaCloudArticle } from "@/components/product/alibaba-cloud-article";
import { articleTags as alibabaCloudTags } from "@/config/content/alibaba-cloud-article";
import { UpCloudArticle } from "@/components/product/upcloud-article";
import { articleTags as upCloudTags } from "@/config/content/upcloud-article";
import { KamateraArticle } from "@/components/product/kamatera-article";
import { articleTags as kamateraTags } from "@/config/content/kamatera-article";
import { OracleCloudArticle } from "@/components/product/oracle-cloud-article";
import { articleTags as oracleCloudTags } from "@/config/content/oracle-cloud-article";
import { GoogleCloudArticle } from "@/components/product/google-cloud-article";
import { articleTags as googleCloudTags } from "@/config/content/google-cloud-article";
import { LinodeArticle } from "@/components/product/linode-article";
import { articleTags as linodeTags } from "@/config/content/linode-article";
import { VultrArticle } from "@/components/product/vultr-article";
import { articleTags as vultrTags } from "@/config/content/vultr-article";
import { HetznerArticle } from "@/components/product/hetzner-article";
import { articleTags as hetznerTags } from "@/config/content/hetzner-article";
import { DigitalOceanArticle } from "@/components/product/digital-ocean-article";
import { articleTags as digitalOceanTags } from "@/config/content/digital-ocean-article";
import { AwsFreeTrialArticle } from "@/components/product/aws-free-trial-article";
import { Aws8VcpuArticle } from "@/components/product/aws-8vcpu-article";
import { Aws32VcpuArticle } from "@/components/product/aws-32vcpu-article";
import { Aws64VcpuArticle } from "@/components/product/aws-64vcpu-article";
import { Aws128VcpuArticle } from "@/components/product/aws-128vcpu-article";
import { Aws256VcpuArticle } from "@/components/product/aws-256vcpu-article";
import { Aws512VcpuArticle } from "@/components/product/aws-512vcpu-article";
import { Aws1kCreditArticle } from "@/components/product/aws-1k-credit-article";
import { Aws5kCreditArticle } from "@/components/product/aws-5k-credit-article";
import { Aws10kCreditArticle } from "@/components/product/aws-10k-credit-article";
import { Aws25kCreditArticle } from "@/components/product/aws-25k-credit-article";
import { Aws50kCreditArticle } from "@/components/product/aws-50k-credit-article";
import { Aws100kCreditArticle } from "@/components/product/aws-100k-credit-article";

interface TopIntro {
  title: string;
  paragraph: string;
}

export interface ProductPageContent {
  topIntro: TopIntro;
  Article?: ComponentType;
  keywords?: readonly string[];
}

/**
 * Bespoke per-product page content (SEO intro + long-form article + extra
 * metadata keywords) that can't be generated automatically — keyed by the
 * product's stable `categorySlug:slug` identity (not by productSlug, so
 * this keeps working even if a title/productSlug ever changes).
 *
 * This is exactly the content that used to live in one static route file
 * per product; consolidating those ~25 files into the single
 * `/[productSlug]` route (see src/app/[productSlug]/page.tsx) moved their
 * content here verbatim — nothing was reworded or shortened. Azure is
 * handled as its own special case directly in that route (different
 * section layout — Related Products repositioned after its article), not
 * through this registry.
 *
 * Products with no entry here (AWS AI Accounts, the Amazon AWS mirror
 * category, and any future product) fall back to `buildDefaultTopIntro`
 * and render no extra article — exactly their current behavior.
 */
export const PRODUCT_PAGE_CONTENT: Record<string, ProductPageContent> = {
  "cloud-accounts:ovhcloud-account": {
    topIntro: {
      title: "Buy OVHcloud Account – Choose the Right Cloud Plan",
      paragraph:
        "Explore OVHcloud accounts across Public Cloud, Private Cloud, VPS, and Dedicated Server configurations for development, hosting, and business workloads. Compare the available variants and prices below to find the OVHcloud account that fits your needs.",
    },
    Article: OvhcloudArticle,
    keywords: ovhcloudTags,
  },
  "cloud-accounts:ibm-cloud-account": {
    topIntro: {
      title: "Buy IBM Cloud Account – Choose the Right Cloud Plan",
      paragraph:
        "Explore IBM Cloud accounts built for cloud credits, Lite plans, AI services, virtual servers, Kubernetes, and database workloads. Compare the price and details below to find the IBM Cloud account that fits your needs.",
    },
    Article: IbmCloudArticle,
    keywords: ibmCloudTags,
  },
  "cloud-accounts:verified-icloud-account": {
    topIntro: {
      title: "Buy Verified iCloud Account – Choose the Right Storage Plan",
      paragraph:
        "Explore verified iCloud accounts with different regions, storage capacities, and Apple service access. Compare the available variants and prices below to find the iCloud account that fits your needs.",
    },
    Article: VerifiedICloudArticle,
    keywords: verifiedICloudTags,
  },
  "cloud-accounts:alibaba-cloud-account": {
    topIntro: {
      title: "Buy Alibaba Cloud Account – Choose the Right Cloud Plan",
      paragraph:
        "Explore Alibaba Cloud accounts with free trial quotas, ECS instances, cloud credits, and AI workload support. Compare the available variants and prices below to find the Alibaba Cloud account that fits your needs.",
    },
    Article: AlibabaCloudArticle,
    keywords: alibabaCloudTags,
  },
  "cloud-accounts:upcloud-account": {
    topIntro: {
      title: "Buy UpCloud Account – Choose the Right Server Plan",
      paragraph:
        "Explore UpCloud accounts built for MaxIOPS storage, VPS, GPU servers, and Kubernetes workloads across multiple data centers. Compare the price and details below to find the UpCloud account that fits your needs.",
    },
    Article: UpCloudArticle,
    keywords: upCloudTags,
  },
  "cloud-accounts:kamatera-account": {
    topIntro: {
      title: "Buy Kamatera Account – Choose the Right Server Configuration",
      paragraph:
        "Explore Kamatera accounts with different free trial and VPS server configurations for development and cloud infrastructure workloads. Compare the available variants and prices below to find the Kamatera account that fits your needs.",
    },
    Article: KamateraArticle,
    keywords: kamateraTags,
  },
  "cloud-accounts:oracle-cloud-account": {
    topIntro: {
      title: "Buy Oracle Cloud Account – Choose the Right Cloud Plan",
      paragraph:
        "Explore Oracle Cloud accounts with Always Free resources, Universal Credits, compute, and database configurations across multiple regions. Compare the available variants and prices below to find the Oracle Cloud account that fits your needs.",
    },
    Article: OracleCloudArticle,
    keywords: oracleCloudTags,
  },
  "cloud-accounts:google-cloud-account": {
    topIntro: {
      title: "Buy Google Cloud Account – Choose the Right Cloud Configuration",
      paragraph:
        "Explore Google Cloud accounts with different cloud credit amounts, project access levels, and resource limits for development and business workloads. Compare the available variants and prices below to find the Google Cloud account that fits your needs.",
    },
    Article: GoogleCloudArticle,
    keywords: googleCloudTags,
  },
  "cloud-accounts:linode-account": {
    topIntro: {
      title: "Buy Linode Account – Choose the Right VPS Plan",
      paragraph:
        "Explore Linode accounts with different VPS plans, CPU options, storage, and network transfer configurations across multiple data centers. Compare the available variants and prices below to find the Linode account that fits your needs.",
    },
    Article: LinodeArticle,
    keywords: linodeTags,
  },
  "cloud-accounts:vultr-account": {
    topIntro: {
      title: "Buy Vultr Account – Choose the Right Cloud Account",
      paragraph:
        "Explore Vultr accounts with different cloud credit amounts and VPS instance configurations for development, hosting, and business workloads. Compare the available variants and prices below to find the Vultr account that fits your needs.",
    },
    Article: VultrArticle,
    keywords: vultrTags,
  },
  "cloud-accounts:hetzner-account": {
    topIntro: {
      title: "Buy Hetzner Account – Choose the Right Server Configuration",
      paragraph:
        "Explore Hetzner accounts with different server limits and port configurations for development, hosting, and infrastructure workloads. Compare the available variants and prices below to find the Hetzner account that fits your needs.",
    },
    Article: HetznerArticle,
    keywords: hetznerTags,
  },
  "cloud-accounts:digital-ocean-account": {
    topIntro: {
      title: "Buy DigitalOcean Account – Choose the Right Cloud Account",
      paragraph:
        "Explore DigitalOcean accounts with different Droplet limits and port configurations for development, hosting, and infrastructure workloads. Compare the available variants and prices below to find the DigitalOcean account that fits your needs.",
    },
    Article: DigitalOceanArticle,
    keywords: digitalOceanTags,
  },
  "aws-accounts:free-trial": {
    topIntro: {
      title: "Buy AWS Free Trial Account – Get Started with AWS",
      paragraph:
        "Explore the AWS Free Trial account, a low-cost way to evaluate AWS services before committing to a larger configuration. Compare the price and details below to see if this account fits your needs.",
    },
    Article: AwsFreeTrialArticle,
  },
  "aws-accounts:8-vcpu": {
    topIntro: {
      title: "Buy AWS 8 vCPU Account – Choose the Right Configuration",
      paragraph:
        "Explore AWS 8 vCPU accounts with different configuration tiers for development, testing, and lightweight compute workloads. Compare the available variants and prices below to find the account that fits your needs.",
    },
    Article: Aws8VcpuArticle,
  },
  "aws-accounts:32-vcpu": {
    topIntro: {
      title: "Buy AWS 32 vCPU Account – Choose the Right Configuration",
      paragraph:
        "Explore AWS 32 vCPU accounts with different configuration tiers for development, applications, and mid-size compute workloads. Compare the available variants and prices below to find the account that fits your needs.",
    },
    Article: Aws32VcpuArticle,
  },
  "aws-accounts:64-vcpu": {
    topIntro: {
      title: "Buy AWS 64 vCPU Account – Choose the Right Configuration",
      paragraph:
        "Explore the AWS 64 vCPU account, built for balanced, general-purpose compute workloads. Compare the price and details below to see if this account fits your needs.",
    },
    Article: Aws64VcpuArticle,
  },
  "aws-accounts:128-vcpu": {
    topIntro: {
      title: "Buy AWS 128 vCPU Account – Choose the Right Configuration",
      paragraph:
        "Explore the AWS 128 vCPU account, built for scaling workloads that need more compute headroom. Compare the price and details below to see if this account fits your needs.",
    },
    Article: Aws128VcpuArticle,
  },
  "aws-accounts:256-vcpu": {
    topIntro: {
      title: "Buy AWS 256 vCPU Account – Choose the Right Configuration",
      paragraph:
        "Explore the AWS 256 vCPU account, built for heavy compute workloads that need significant processing power. Compare the price and details below to see if this account fits your needs.",
    },
    Article: Aws256VcpuArticle,
  },
  "aws-accounts:512-vcpu": {
    topIntro: {
      title: "Buy AWS 512 vCPU Account – Choose the Right Configuration",
      paragraph:
        "Explore the AWS 512 vCPU account, built for large, demanding compute workloads that need maximum capacity. Compare the price and details below to see if this account fits your needs.",
    },
    Article: Aws512VcpuArticle,
  },
  "aws-credit-accounts:1k-credit": {
    topIntro: {
      title: "Buy AWS 1K Credit Account – Choose the Right Credit Plan",
      paragraph:
        "Explore the AWS 1K Credit account, pre-loaded with 1,000 of promotional credit for development, testing, and cloud infrastructure workloads. Compare the price and details below to see if this account fits your needs.",
    },
    Article: Aws1kCreditArticle,
  },
  "aws-credit-accounts:5k-credit": {
    topIntro: {
      title: "Buy AWS 5K Credit Account – Choose the Right Credit Plan",
      paragraph:
        "Explore the AWS 5K Credit account, pre-loaded with 5,000 of promotional credit for development, testing, and cloud infrastructure workloads. Compare the price and details below to see if this account fits your needs.",
    },
    Article: Aws5kCreditArticle,
  },
  "aws-credit-accounts:10k-credit": {
    topIntro: {
      title: "Buy AWS 10K Credit Account – Choose the Right Credit Plan",
      paragraph:
        "Explore the AWS 10K Credit account, pre-loaded with 10,000 of promotional credit for development, testing, and cloud infrastructure workloads. Compare the price and details below to see if this account fits your needs.",
    },
    Article: Aws10kCreditArticle,
  },
  "aws-credit-accounts:25k-credit": {
    topIntro: {
      title: "Buy AWS 25K Credit Account – Choose the Right Credit Plan",
      paragraph:
        "Explore the AWS 25K Credit account, pre-loaded with 25,000 of promotional credit for development, testing, and cloud infrastructure workloads. Compare the price and details below to see if this account fits your needs.",
    },
    Article: Aws25kCreditArticle,
  },
  "aws-credit-accounts:50k-credit": {
    topIntro: {
      title: "Buy AWS 50K Credit Account – Choose the Right Credit Plan",
      paragraph:
        "Explore the AWS 50K Credit account, pre-loaded with 50,000 of promotional credit for development, testing, and cloud infrastructure workloads. Compare the price and details below to see if this account fits your needs.",
    },
    Article: Aws50kCreditArticle,
  },
  "aws-credit-accounts:100k-credit": {
    topIntro: {
      title: "Buy AWS 100K Credit Account – Choose the Right Credit Plan",
      paragraph:
        "Explore the AWS 100K Credit account, pre-loaded with 100,000 of promotional credit for development, testing, and cloud infrastructure workloads. Compare the price and details below to see if this account fits your needs.",
    },
    Article: Aws100kCreditArticle,
  },
};
