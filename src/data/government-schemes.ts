export interface GovernmentScheme {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
  relatedSchemes: string[];
}

export const governmentSchemes: GovernmentScheme[] = [
  {
    slug: "mortgage-guarantee-scheme",
    title: "Mortgage Guarantee Scheme",
    metaTitle: "Mortgage Guarantee Scheme Explained | Remortgage Advisor",
    metaDescription: "Understand the Mortgage Guarantee Scheme that helps first time buyers get 95% mortgages. Learn how it works and which lenders participate.",
    heroTitle: "Mortgage Guarantee Scheme Explained",
    heroDescription: "Government-backed support for 95% mortgages, helping buyers with smaller deposits access homeownership.",
    content: [
      {
        heading: "What is the Mortgage Guarantee Scheme?",
        paragraphs: [
          "The Mortgage Guarantee Scheme is a government initiative that encourages lenders to offer 95% loan-to-value (LTV) mortgages by providing a partial guarantee against lender losses. This makes lenders more willing to offer high LTV products, helping buyers who have saved 5% deposits to purchase properties worth up to £600,000.",
          "The scheme was introduced in April 2021 and has been extended multiple times, most recently until June 2025. It's available for both first-time buyers and home movers purchasing their primary residence.",
        ],
      },
      {
        heading: "How Does It Work?",
        paragraphs: [
          "The government guarantees a portion of the mortgage against the risk of the borrower defaulting and the property being repossessed at a loss. This guarantee covers losses between 80% and 95% LTV, reducing the lender's risk exposure on high LTV lending.",
          "For borrowers, the scheme is invisible - you apply for a 95% mortgage from participating lenders as normal. The government guarantee operates between the lender and government, not involving borrowers directly.",
        ],
      },
      {
        heading: "Eligibility Requirements",
        paragraphs: [
          "The scheme covers mortgages on properties in the UK worth up to £600,000 (the same as stamp duty first-time buyer relief threshold). The property must be your primary residence - it doesn't cover buy-to-let or second homes. Both first-time buyers and existing homeowners can use the scheme.",
          "Standard mortgage affordability rules apply. You'll need to pass the lender's affordability assessment based on your income, debts, and credit history. The scheme makes 95% mortgages available but doesn't change affordability criteria.",
        ],
      },
      {
        heading: "Participating Lenders",
        paragraphs: [
          "Major high street lenders participate in the scheme, including Barclays, HSBC, Lloyds, NatWest, Santander, and Nationwide. Several building societies also offer scheme-backed products.",
          "Not all 95% mortgages use the scheme - some lenders offer high LTV products without the government guarantee. The scheme simply ensures broad availability of 95% mortgages across the market.",
        ],
      },
    ],
    relatedSchemes: ["shared-ownership", "first-homes-scheme", "lifetime-isa"],
  },
  {
    slug: "shared-ownership",
    title: "Shared Ownership",
    metaTitle: "Shared Ownership Scheme Explained | Remortgage Advisor",
    metaDescription: "Understand how Shared Ownership works. Buy a share of a property and pay rent on the rest. Learn eligibility, staircasing and remortgage options.",
    heroTitle: "Shared Ownership Explained",
    heroDescription: "Buy a share of a home and pay rent on the rest. A route to homeownership with a smaller deposit.",
    content: [
      {
        heading: "What is Shared Ownership?",
        paragraphs: [
          "Shared Ownership allows you to buy a share of a property (typically 25-75%) and pay rent on the portion you don't own. You need a mortgage for your share and a deposit based on that share value, making homeownership accessible with less upfront capital than buying outright.",
          "The scheme is offered by housing associations on new build and some resale properties. Over time, you can buy additional shares (staircasing) until you own the property outright.",
        ],
      },
      {
        heading: "How It Works",
        paragraphs: [
          "You buy an initial share (minimum usually 25%) with a mortgage and deposit. On the remaining share owned by the housing association, you pay rent - typically below market rates. Combined mortgage and rent payments should be more affordable than buying outright or private renting.",
          "For example, on a £200,000 property buying a 50% share, you'd need a mortgage and deposit for £100,000. You'd pay rent on the remaining £100,000 share to the housing association.",
        ],
      },
      {
        heading: "Eligibility Criteria",
        paragraphs: [
          "Shared Ownership is for households earning £80,000 or less (£90,000 in London). Priority is given to first-time buyers, though existing homeowners who can't afford to buy outright may also qualify. You must not already own a home when you complete the purchase.",
          "Some schemes are restricted to specific groups - key workers, local residents, or military personnel. Check individual development requirements.",
        ],
      },
      {
        heading: "Staircasing",
        paragraphs: [
          "Staircasing means buying additional shares in your property over time. You can typically purchase additional shares (minimum 10%) at current market value. As you buy more shares, your rent payments reduce proportionally. Eventually, you can staircase to 100% and own outright.",
          "Staircasing requires a new valuation and potentially a remortgage to fund the additional share purchase. Some lenders offer specific staircasing products.",
        ],
      },
      {
        heading: "Shared Ownership Remortgages",
        paragraphs: [
          "You can remortgage your share just like a standard property. When your initial deal ends, compare options from lenders who accept Shared Ownership properties - not all do. Some lenders specialise in this area and understand the scheme well.",
          "Our brokers have access to Shared Ownership-friendly lenders and can help you find competitive remortgage deals whether you're staying at your current share or staircasing.",
        ],
      },
    ],
    relatedSchemes: ["first-homes-scheme", "mortgage-guarantee-scheme", "right-to-buy"],
  },
  {
    slug: "right-to-buy",
    title: "Right to Buy",
    metaTitle: "Right to Buy Scheme Explained | Remortgage Advisor",
    metaDescription: "Understand Right to Buy for council and housing association tenants. Learn about discounts, eligibility and mortgage options.",
    heroTitle: "Right to Buy Explained",
    heroDescription: "Eligible council and housing association tenants can purchase their home at a discount.",
    content: [
      {
        heading: "What is Right to Buy?",
        paragraphs: [
          "Right to Buy allows eligible council tenants in England to purchase their home at a discount. The discount can be substantial - up to £87,200 in most of England or £116,200 in London (2024 figures). Housing association tenants may have similar rights under Right to Acquire or Preserved Right to Buy.",
          "The scheme has helped millions of tenants become homeowners since its introduction in 1980. Your discount can effectively act as your mortgage deposit, potentially requiring no cash savings.",
        ],
      },
      {
        heading: "How Much Discount?",
        paragraphs: [
          "Your discount depends on how long you've been a council tenant. For houses, you start at 35% of property value after 3 years as a tenant, increasing by 1% for each additional year up to 70% maximum. For flats, you start at 50% after 3 years, increasing by 2% per year up to 70%.",
          "The discount is capped at the cash maximum (£87,200/£116,200) or the percentage maximum (70%), whichever is lower. Some properties have reduced discounts if they were purchased by the council less than 15 years ago.",
        ],
      },
      {
        heading: "Eligibility",
        paragraphs: [
          "You must be a secure council tenant (or similar for housing associations) with at least 3 years' tenancy. The property must be your main home. Some properties are excluded - sheltered housing, properties scheduled for demolition, or those with certain tenancy types.",
          "Joint applications with up to 3 family members who live with you are possible. Their residence period can help qualify, though only the tenant gets the main discount calculation.",
        ],
      },
      {
        heading: "Using Your Discount as a Deposit",
        paragraphs: [
          "Your Right to Buy discount can act as your deposit. If your home is valued at £150,000 and you have a 40% discount (£60,000), you'd pay £90,000. The £60,000 discount gives you 40% equity immediately, meaning you need a 60% LTV mortgage - which typically comes with competitive rates.",
          "Some lenders require you to contribute some cash; others accept the full discount as your deposit. Lender criteria vary, so broker advice is valuable.",
        ],
      },
      {
        heading: "Discount Repayment Rules",
        paragraphs: [
          "If you sell within 5 years of buying, you must repay some or all of your discount: 100% in year 1, reducing by 20% each year. After 5 years, the discount is yours to keep. You must also offer the property to social landlords first if selling within 10 years.",
          "These rules apply to selling, not remortgaging. You can remortgage without triggering discount repayment.",
        ],
      },
    ],
    relatedSchemes: ["shared-ownership", "mortgage-guarantee-scheme", "first-homes-scheme"],
  },
  {
    slug: "first-homes-scheme",
    title: "First Homes Scheme",
    metaTitle: "First Homes Scheme Explained | Remortgage Advisor",
    metaDescription: "Learn about First Homes offering 30-50% discounts on new builds for first time buyers. Understand eligibility and how to apply.",
    heroTitle: "First Homes Scheme Explained",
    heroDescription: "New build homes at 30-50% discount for eligible first time buyers and key workers.",
    content: [
      {
        heading: "What is the First Homes Scheme?",
        paragraphs: [
          "First Homes is a government scheme offering newly built homes at a discount of at least 30% (up to 50% in some areas) compared to market value. The discount is passed on to future buyers when you sell, keeping homes affordable in perpetuity. It launched in 2021 as part of planning requirements for new developments.",
          "Unlike Help to Buy, there's no equity loan to repay. The discount is permanent - you buy at the discounted price, and when you sell, the next buyer also gets the same percentage discount on market value.",
        ],
      },
      {
        heading: "Eligibility Requirements",
        paragraphs: [
          "First Homes is for first time buyers (or those unable to afford to buy without the scheme) with household income of £80,000 or less (£90,000 in London). The discounted price must be no more than £250,000 (£420,000 in London). You must be buying your main residence with a mortgage of at least 50% of the purchase price.",
          "Priority may be given to local residents, key workers, or military personnel depending on local authority requirements. Check specific development criteria.",
        ],
      },
      {
        heading: "How the Discount Works",
        paragraphs: [
          "The minimum discount is 30%, though local authorities can require 40% or 50% in areas with greater affordability pressures. The discount percentage is fixed to the property - if you buy at 30% off, future sales must also be at 30% off market value.",
          "For example, a £200,000 home with 30% discount would sell for £140,000. If that buyer later sells when market value is £250,000, they'd sell for £175,000 (30% off £250,000).",
        ],
      },
      {
        heading: "Mortgage Requirements",
        paragraphs: [
          "You must buy with a mortgage of at least 50% of the purchase price. This prevents cash buyers benefiting from the scheme instead of those who need help affording homeownership. Standard mortgage affordability criteria apply.",
          "Not all lenders offer First Homes mortgages, as the resale restriction requires specific legal understanding. Our brokers can identify lenders who work with First Homes properties.",
        ],
      },
      {
        heading: "When You Sell",
        paragraphs: [
          "When selling, you must sell at the same percentage discount to another eligible first-time buyer. The home must be marketed to eligible buyers for at least 3 months before considering any wider sale. This keeps First Homes affordable for future generations.",
          "You benefit from property value growth (selling at higher price if market rises) but must always apply the same percentage discount your original purchase received.",
        ],
      },
    ],
    relatedSchemes: ["shared-ownership", "mortgage-guarantee-scheme", "lifetime-isa"],
  },
  {
    slug: "lifetime-isa",
    title: "Lifetime ISA",
    metaTitle: "Lifetime ISA for First Time Buyers Explained | Remortgage Advisor",
    metaDescription: "Understand how Lifetime ISAs help first time buyers save for deposits. Learn about the 25% government bonus and rules for property purchases.",
    heroTitle: "Lifetime ISA Explained",
    heroDescription: "Save for your first home and get a 25% government bonus on contributions up to £4,000 per year.",
    content: [
      {
        heading: "What is a Lifetime ISA?",
        paragraphs: [
          "A Lifetime ISA (LISA) is a savings account that gives first time buyers a 25% government bonus on savings up to £4,000 per year. Save £4,000 and receive £1,000 bonus - free money toward your deposit. You can also use it for retirement after age 60.",
          "You must be 18-39 to open a LISA, and it must be open for at least 12 months before you can use it for a property purchase. This encourages forward planning for first-time buyers.",
        ],
      },
      {
        heading: "The 25% Bonus",
        paragraphs: [
          "The government adds 25% to whatever you save, up to £4,000 contribution per tax year. Maximum annual bonus is £1,000. You can contribute until age 50, potentially building significant funds with bonuses over many years of saving.",
          "Bonuses are added monthly, so you see your account grow throughout the year. Unlike the old Help to Buy ISA (now closed to new accounts), the bonus is paid as you save rather than at property completion.",
        ],
      },
      {
        heading: "Using Your LISA for a Property",
        paragraphs: [
          "You can use LISA funds (savings plus bonuses) toward a first home worth up to £450,000. The purchase must be with a mortgage, and it must be your main residence. The account must have been open for at least 12 months before withdrawal.",
          "Your solicitor withdraws the funds directly from your LISA provider during the conveyancing process. The money goes toward your deposit and purchase costs.",
        ],
      },
      {
        heading: "Withdrawal Penalties",
        paragraphs: [
          "If you withdraw for any purpose other than buying your first home or retirement after 60, you'll face a 25% penalty on the amount withdrawn. This effectively removes your bonus plus some of your original savings. Only withdraw early in genuine emergencies.",
          "The penalty has been temporarily reduced to 20% during certain periods, but normally sits at 25%. Check current rules before making any non-qualifying withdrawal.",
        ],
      },
      {
        heading: "LISA vs Help to Buy ISA",
        paragraphs: [
          "Help to Buy ISAs closed to new accounts in 2019, but existing holders can still use them until 2029. If you have both, you can only use one for a property purchase. Generally, LISA is better for higher property values (bonus paid on actual savings rather than limited to £3,000) while Help to Buy ISA was simpler for smaller purchases.",
          "New savers should focus on LISA as the available option. The higher property price cap (£450,000 vs £250,000/£450,000 for Help to Buy) makes it suitable for more of the market.",
        ],
      },
    ],
    relatedSchemes: ["mortgage-guarantee-scheme", "shared-ownership", "first-homes-scheme"],
  },
];

export function getGovernmentSchemeBySlug(slug: string): GovernmentScheme | undefined {
  return governmentSchemes.find((scheme) => scheme.slug === slug);
}

export function getAllGovernmentSchemeSlugs(): string[] {
  return governmentSchemes.map((scheme) => scheme.slug);
}
