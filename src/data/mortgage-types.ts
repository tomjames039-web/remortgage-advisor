export interface MortgageType {
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
  prosAndCons: {
    pros: string[];
    cons: string[];
  };
  relatedTypes: string[];
}

export const mortgageTypes: MortgageType[] = [
  {
    slug: "fixed-rate",
    title: "Fixed Rate Mortgages",
    metaTitle: "Fixed Rate Mortgages Explained - Pros, Cons & Best Rates | Remortgage Advisor",
    metaDescription: "Understand how fixed rate mortgages work, their advantages and disadvantages, and compare the best fixed rate deals from UK lenders.",
    heroTitle: "Fixed Rate Mortgages Explained",
    heroDescription: "Lock in your interest rate for peace of mind and budget certainty. Learn how fixed rate mortgages work.",
    content: [
      {
        heading: "How Fixed Rate Mortgages Work",
        paragraphs: [
          "A fixed rate mortgage locks in your interest rate for a set period, typically 2, 3, 5, or 10 years. During this time, your monthly payments remain exactly the same regardless of changes to the Bank of England base rate or market conditions. This provides certainty and protection against rate rises, making it easier to budget and plan your finances.",
          "When your fixed period ends, you'll move onto your lender's Standard Variable Rate (SVR) unless you remortgage to a new deal. The SVR is typically higher than fixed rates, so most borrowers remortgage when their fix ends to maintain competitive rates.",
        ],
      },
      {
        heading: "Choosing Your Fixed Term",
        paragraphs: [
          "The most common fixed terms are 2 years and 5 years, though some lenders offer 3, 7, or even 10-year fixes. Shorter terms typically have slightly lower rates but require more frequent remortgaging. Longer terms provide extended certainty but may come with marginally higher rates and larger early repayment charges.",
          "Consider your circumstances when choosing a term. If you might move home, sell, or want flexibility, a shorter term with lower ERCs might suit better. If you want long-term stability and are settled, a longer fix could be worthwhile even at a slightly higher rate.",
        ],
      },
      {
        heading: "Early Repayment Charges",
        paragraphs: [
          "Fixed rate mortgages typically include early repayment charges (ERCs) if you pay off the mortgage or remortgage before the fixed period ends. These are usually a percentage of the outstanding balance, often starting at 3-5% and reducing over time. Some fixes allow limited overpayments (commonly 10% of the balance annually) without penalty.",
          "ERCs protect lenders when you break a deal early, but they can be significant costs if your circumstances change. Consider potential scenarios - job relocation, upsizing, relationship changes - when choosing your term length.",
        ],
      },
      {
        heading: "When to Consider a Fixed Rate",
        paragraphs: [
          "Fixed rates suit borrowers who value certainty, want protection against rising interest rates, or need predictable outgoings for budgeting. They're particularly popular among first-time buyers and families with tight monthly budgets. In times of economic uncertainty or when rates are expected to rise, fixing can save money over the term.",
          "Many lenders and building societies offer fixed rate products. Our brokers compare deals across the market to find the most competitive rates for your circumstances.",
        ],
      },
    ],
    prosAndCons: {
      pros: [
        "Payment certainty - know exactly what you'll pay each month",
        "Protection against interest rate rises",
        "Easier budgeting and financial planning",
        "Peace of mind during economic uncertainty",
      ],
      cons: [
        "Won't benefit if interest rates fall",
        "Early repayment charges apply during fixed period",
        "Less flexibility to overpay or remortgage",
        "Rate may be slightly higher than initial variable rates",
      ],
    },
    relatedTypes: ["variable-rate", "tracker", "offset"],
  },
  {
    slug: "variable-rate",
    title: "Variable Rate Mortgages",
    metaTitle: "Variable Rate Mortgages (SVR) Explained | Remortgage Advisor",
    metaDescription: "Understand Standard Variable Rate mortgages, why they're usually expensive, and when you should remortgage to a better deal.",
    heroTitle: "Variable Rate Mortgages (SVR) Explained",
    heroDescription: "On your lender's Standard Variable Rate? You could be paying more than necessary. Understand your options.",
    content: [
      {
        heading: "What is a Standard Variable Rate?",
        paragraphs: [
          "A Standard Variable Rate (SVR) is your lender's default mortgage rate. When your fixed, tracker, or discount period ends, you'll usually move onto the SVR automatically. This rate is set by your lender and can change at their discretion, regardless of what happens to the Bank of England base rate.",
          "SVRs are typically significantly higher than the best available mortgage rates. They exist partly because some borrowers don't remortgage when their deal ends, whether due to unawareness, inertia, or changed circumstances that make remortgaging difficult.",
        ],
      },
      {
        heading: "Why SVRs Are Usually Higher",
        paragraphs: [
          "Lenders don't compete on their SVRs in the same way they compete for new business. The most attractive rates are reserved for new customers or existing customers actively switching products. SVRs often run 1-2% or more above competitive new deals, meaning you could be paying hundreds of pounds extra each month unnecessarily.",
          "Being on an SVR isn't always wrong, but for most borrowers it's worth checking whether switching to a new deal would save money. The savings over a mortgage term can be substantial.",
        ],
      },
      {
        heading: "When an SVR Might Make Sense",
        paragraphs: [
          "There are limited circumstances where staying on an SVR could be appropriate. If you're planning to sell your home within a few months, avoiding a new deal with early repayment charges might be sensible. SVRs also offer complete flexibility - you can usually overpay without limits or leave without penalties.",
          "Some borrowers stay on SVRs because they can't remortgage due to changed circumstances - reduced income, credit problems, or changes to property value. Even in these cases, speaking to a broker might reveal options you weren't aware of.",
        ],
      },
      {
        heading: "Should You Remortgage Off Your SVR?",
        paragraphs: [
          "For most borrowers on an SVR, the answer is yes - remortgaging to a competitive rate will save money. The remortgage process is straightforward and often involves no fees if you work with a broker. Free valuations and legal services are common for remortgage products.",
          "Our brokers can quickly compare your SVR against available deals and show you how much you could save by switching. Complete our form for a free, no-obligation quote.",
        ],
      },
    ],
    prosAndCons: {
      pros: [
        "No early repayment charges - complete flexibility",
        "Can overpay without limits",
        "No tie-in period - leave anytime",
        "Might suit if selling soon",
      ],
      cons: [
        "Usually much more expensive than other options",
        "Rate can change at lender's discretion",
        "No protection against rate rises",
        "Unpredictable monthly payments",
      ],
    },
    relatedTypes: ["fixed-rate", "tracker", "offset"],
  },
  {
    slug: "tracker",
    title: "Tracker Mortgages",
    metaTitle: "Tracker Mortgages Explained - Follow the Base Rate | Remortgage Advisor",
    metaDescription: "Understand tracker mortgages that follow the Bank of England base rate. Compare tracker deals and understand the risks and benefits.",
    heroTitle: "Tracker Mortgages Explained",
    heroDescription: "Benefit from rate cuts automatically with a tracker mortgage that follows the Bank of England base rate.",
    content: [
      {
        heading: "How Tracker Mortgages Work",
        paragraphs: [
          "A tracker mortgage has an interest rate linked to the Bank of England base rate at a set margin. For example, base rate plus 1% means if the base rate is 4.5%, you pay 5.5%. When the Bank of England changes rates, your mortgage rate automatically adjusts - your payments decrease when rates fall and increase when they rise.",
          "Most trackers have a defined term (commonly 2-5 years), after which you move to the SVR. Some lenders offer lifetime trackers that continue for your entire mortgage term. The margin above base rate varies between lenders and depends on factors like LTV and credit profile.",
        ],
      },
      {
        heading: "Transparency and Flexibility",
        paragraphs: [
          "Tracker mortgages offer transparency - you always know exactly how your rate is calculated based on an external, published rate. There's no discretion involved from the lender. If the base rate falls, you benefit immediately without needing to remortgage.",
          "Many trackers come with lower or no early repayment charges, offering more flexibility than fixed rates. This suits borrowers who might need to move or remortgage during their deal period.",
        ],
      },
      {
        heading: "Risks of Tracker Mortgages",
        paragraphs: [
          "The flip side of automatic adjustments is that your payments rise when the base rate increases. Unlike fixed rates, there's no ceiling on how high your rate could go. Before choosing a tracker, consider whether you could afford significantly higher payments if rates rose by 2-3%.",
          "Some tracker mortgages include floors or collars - minimum rates below which your interest can't fall. Check terms carefully to understand any limitations that might apply.",
        ],
      },
      {
        heading: "When to Consider a Tracker",
        paragraphs: [
          "Trackers suit borrowers comfortable with some payment variability who want transparency and flexibility. They can work well if you believe rates are likely to stay stable or fall, or if you need the option to remortgage without facing significant ERCs.",
          "Our brokers can compare tracker deals across the market and help you assess whether the flexibility benefits outweigh the rate uncertainty risks for your circumstances.",
        ],
      },
    ],
    prosAndCons: {
      pros: [
        "Transparent rate calculation based on external reference",
        "Automatic benefit from any base rate cuts",
        "Often lower or no early repayment charges",
        "More flexibility than fixed rates",
      ],
      cons: [
        "Payments rise when base rate increases",
        "Harder to budget with variable payments",
        "No protection against rate rises",
        "May have floors limiting rate reductions",
      ],
    },
    relatedTypes: ["fixed-rate", "variable-rate", "offset"],
  },
  {
    slug: "offset",
    title: "Offset Mortgages",
    metaTitle: "Offset Mortgages Explained - Use Savings to Reduce Interest | Remortgage Advisor",
    metaDescription: "Learn how offset mortgages work, linking savings to reduce mortgage interest. Compare offset deals and calculate potential savings.",
    heroTitle: "Offset Mortgages Explained",
    heroDescription: "Use your savings to reduce mortgage interest without locking them away. Understand how offset mortgages work.",
    content: [
      {
        heading: "How Offset Mortgages Work",
        paragraphs: [
          "An offset mortgage links your savings account to your mortgage balance. Instead of earning interest on savings, you offset them against your mortgage, so you're charged interest on a smaller amount. With a £200,000 mortgage and £30,000 in savings, you'd only pay interest on £170,000.",
          "Your savings remain accessible - they're not used to pay off the mortgage and you can withdraw them if needed. However, withdrawing savings means you're no longer offsetting that amount, so your mortgage interest charges would increase.",
        ],
      },
      {
        heading: "Tax Benefits of Offsetting",
        paragraphs: [
          "Offsetting is effectively tax-free saving. Because you're not earning interest, there's nothing to tax. This particularly benefits higher-rate taxpayers, for whom savings interest above their personal allowance would be taxed at 40% or more.",
          "Compare the tax-free benefit of offsetting against what you'd earn after tax on savings. For many higher-rate taxpayers, offsetting provides a better net return than most savings accounts.",
        ],
      },
      {
        heading: "Who Benefits Most from Offset?",
        paragraphs: [
          "Offset mortgages work best for those with substantial savings who want to keep them accessible. They're valuable for higher-rate taxpayers benefiting from tax-free interest savings, self-employed people holding cash reserves for tax bills, or anyone expecting a large payment they'll want to offset temporarily.",
          "The maths depends on how much you'll offset. Offset rates are typically 0.2-0.5% higher than equivalent non-offset products. With small savings, the rate premium might cost more than you save. With large savings, the benefits can be substantial.",
        ],
      },
      {
        heading: "Offset Mortgage Providers",
        paragraphs: [
          "Not all lenders offer offset mortgages. Notable providers include First Direct, Barclays, Yorkshire Building Society, Coventry Building Society, and Family Building Society. Some allow family members to link their savings too, increasing the offset amount.",
          "Our brokers can compare offset products and calculate whether offsetting genuinely saves you money based on your savings levels and tax position.",
        ],
      },
    ],
    prosAndCons: {
      pros: [
        "Tax-free interest savings",
        "Savings remain accessible",
        "Potentially reduce mortgage term",
        "Useful for holding cash reserves",
      ],
      cons: [
        "Rates typically higher than standard mortgages",
        "Only worthwhile with significant savings",
        "Fewer lenders offer offset products",
        "Complexity in understanding true benefit",
      ],
    },
    relatedTypes: ["fixed-rate", "tracker", "repayment"],
  },
  {
    slug: "interest-only",
    title: "Interest Only Mortgages",
    metaTitle: "Interest Only Mortgages Explained - Requirements & Risks | Remortgage Advisor",
    metaDescription: "Understand interest only mortgages, repayment vehicle requirements, and which lenders still offer interest only residential mortgages.",
    heroTitle: "Interest Only Mortgages Explained",
    heroDescription: "Lower monthly payments with interest only - but understand the requirements and long-term implications.",
    content: [
      {
        heading: "How Interest Only Works",
        paragraphs: [
          "With an interest only mortgage, your monthly payments cover only the interest charged - you don't pay down any of the capital (the amount borrowed). This means significantly lower monthly payments compared to a repayment mortgage, but at the end of your term, you'll still owe the full original loan amount.",
          "For example, on a £200,000 mortgage at 4%, monthly payments would be around £667 for interest only versus £1,055 for repayment over 25 years. That's nearly £400 per month less - but with interest only, you'd still owe £200,000 at the end.",
        ],
      },
      {
        heading: "Repayment Vehicle Requirements",
        paragraphs: [
          "To get an interest only mortgage, lenders require a credible repayment vehicle - a plan for how you'll repay the capital at term end. Acceptable vehicles typically include: sale of the mortgaged property (with sufficient equity), sale of another property, investments or savings, pension lump sums, or endowment policies.",
          "Lenders are strict about repayment vehicles since the 2014 Mortgage Market Review. You'll need to demonstrate how your chosen method will realistically cover the loan amount, usually with supporting evidence.",
        ],
      },
      {
        heading: "Availability of Interest Only",
        paragraphs: [
          "Residential interest only has become harder to find but isn't impossible. Many lenders restrict it to higher-value properties, require maximum 50-75% LTV, or have minimum loan sizes. Building societies and specialist lenders are often more flexible than high street banks.",
          "For buy to let properties, interest only remains standard practice, as landlords typically plan to repay by selling the property or using other investments.",
        ],
      },
      {
        heading: "Risks and Considerations",
        paragraphs: [
          "The main risk is reaching term end without means to repay. Thousands of borrowers have faced this situation with older interest only mortgages. Regularly reviewing your repayment vehicle and ensuring it stays on track is essential.",
          "Consider whether part-and-part (part interest only, part repayment) might offer a compromise - lower payments than full repayment while still reducing some capital each month.",
        ],
      },
    ],
    prosAndCons: {
      pros: [
        "Significantly lower monthly payments",
        "Frees up cash flow for other purposes",
        "Suitable for some investment strategies",
        "Standard approach for buy to let",
      ],
      cons: [
        "Full loan amount still owed at term end",
        "Requires credible repayment vehicle",
        "Limited availability for residential mortgages",
        "Risk of being unable to repay at term end",
      ],
    },
    relatedTypes: ["repayment", "part-and-part", "offset"],
  },
  {
    slug: "repayment",
    title: "Repayment Mortgages",
    metaTitle: "Repayment Mortgages Explained - How They Work | Remortgage Advisor",
    metaDescription: "Understand repayment mortgages and how your monthly payments reduce your mortgage balance. Compare repayment mortgage deals.",
    heroTitle: "Repayment Mortgages Explained",
    heroDescription: "Pay off your mortgage completely over the term with a repayment mortgage. Understand how it works.",
    content: [
      {
        heading: "How Repayment Mortgages Work",
        paragraphs: [
          "With a repayment mortgage (also called capital and interest), each monthly payment covers both interest on the loan and a portion of the capital (the amount borrowed). Over your mortgage term, you gradually pay off the entire debt, meaning you own your home outright at the end with nothing left to pay.",
          "Early payments are mostly interest, with a small capital element. As you progress through the term and the balance reduces, more of each payment goes toward capital. By the end, you're mainly paying off capital with minimal interest.",
        ],
      },
      {
        heading: "Benefits of Repayment Mortgages",
        paragraphs: [
          "The main advantage is security - you're guaranteed to pay off your mortgage if you maintain payments throughout the term. There's no need to worry about repayment vehicles or accumulating separate funds to clear the debt. Your equity in the property grows with each payment.",
          "Repayment mortgages also build equity faster, which can be beneficial if you want to remortgage to release funds later or move to a better LTV band for your next deal.",
        ],
      },
      {
        heading: "Monthly Payment Comparison",
        paragraphs: [
          "Repayment mortgages have higher monthly payments than interest only because you're paying capital as well as interest. On a £200,000 mortgage at 4% over 25 years, repayment costs approximately £1,055 per month versus £667 for interest only - nearly £400 more.",
          "However, at the end of 25 years, you owe nothing with repayment versus still owing £200,000 with interest only. The total cost comparison depends on what you'd do with the monthly savings from interest only and whether your repayment vehicle performs as expected.",
        ],
      },
      {
        heading: "Choosing Repayment",
        paragraphs: [
          "Repayment is the most common and generally recommended mortgage type for most borrowers. It provides certainty that you'll own your home outright and eliminates the risk of reaching term end with outstanding debt. Most lenders prefer repayment mortgages and may offer better rates than interest only.",
          "Our brokers can compare repayment mortgage deals across the market, finding competitive rates that fit your budget and circumstances.",
        ],
      },
    ],
    prosAndCons: {
      pros: [
        "Mortgage fully paid off at term end",
        "Guaranteed to own home outright",
        "Equity builds with every payment",
        "No need for separate repayment vehicle",
      ],
      cons: [
        "Higher monthly payments than interest only",
        "Less monthly cash flow available",
        "Full payment required throughout term",
        "Early years are mostly interest payments",
      ],
    },
    relatedTypes: ["interest-only", "part-and-part", "offset"],
  },
  {
    slug: "part-and-part",
    title: "Part and Part Mortgages",
    metaTitle: "Part and Part Mortgages - Interest Only & Repayment Combined | Remortgage Advisor",
    metaDescription: "Understand part and part mortgages combining interest only and repayment elements. A flexible middle ground for your mortgage.",
    heroTitle: "Part and Part Mortgages Explained",
    heroDescription: "Combine interest only and repayment elements for a flexible mortgage structure that balances payments and security.",
    content: [
      {
        heading: "What is a Part and Part Mortgage?",
        paragraphs: [
          "A part and part mortgage splits your borrowing between interest only and repayment. For example, you might have £150,000 on repayment and £50,000 on interest only. This creates a middle ground - lower payments than full repayment but still paying down some capital each month.",
          "The interest only portion still requires a repayment vehicle, but the amount you need to cover at term end is smaller. You'll pay off the repayment portion completely while owing the interest only portion at the end.",
        ],
      },
      {
        heading: "When Part and Part Makes Sense",
        paragraphs: [
          "Part and part can suit borrowers who want some capital repayment for security but find full repayment payments stretches their budget. It offers flexibility to manage cash flow while still building equity and reducing debt over time.",
          "It might also suit those with partial repayment vehicles - enough assets to cover some but not all of a fully interest only mortgage. Splitting the mortgage reduces the amount you need your repayment vehicle to cover.",
        ],
      },
      {
        heading: "Lender Requirements",
        paragraphs: [
          "Lenders assess part and part mortgages by considering affordability of the combined payments and the repayment vehicle for the interest only portion. Not all lenders offer part and part, but many are flexible about the split between elements.",
          "The LTV restrictions that apply to interest only typically also apply to the interest only portion of a part and part mortgage. You may need lower LTV or higher property values for the interest only element.",
        ],
      },
      {
        heading: "Compare Part and Part Options",
        paragraphs: [
          "Our brokers can help you explore whether a part and part structure suits your circumstances, comparing options from lenders who offer this flexibility. We'll explain how different splits affect your payments and end-of-term position.",
        ],
      },
    ],
    prosAndCons: {
      pros: [
        "Lower payments than full repayment",
        "Still building some equity over time",
        "Smaller repayment vehicle requirement",
        "Flexible balance between elements",
      ],
      cons: [
        "Still need repayment vehicle for IO portion",
        "More complex than single-type mortgage",
        "Not all lenders offer part and part",
        "Must still clear IO portion at term end",
      ],
    },
    relatedTypes: ["interest-only", "repayment", "offset"],
  },
];

export function getMortgageTypeBySlug(slug: string): MortgageType | undefined {
  return mortgageTypes.find((type) => type.slug === slug);
}

export function getAllMortgageTypeSlugs(): string[] {
  return mortgageTypes.map((type) => type.slug);
}
