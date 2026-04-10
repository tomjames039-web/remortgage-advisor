export interface MortgageDeal {
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
  relatedDeals: string[];
}

export const mortgageDeals: MortgageDeal[] = [
  {
    slug: "fixed-rate",
    title: "Fixed Rate Mortgages",
    metaTitle: "Fixed Rate Mortgage Deals - Compare & Get Quotes | Remortgage Advisor",
    metaDescription: "Compare fixed rate mortgage deals from 100+ UK lenders. Lock in your rate for 2, 5 or 10 years. Get expert advice and free quotes from FCA regulated brokers.",
    heroTitle: "Fixed Rate Mortgage Deals - Compare & Get Quotes",
    heroDescription: "Lock in your mortgage rate and enjoy payment certainty with a fixed rate mortgage. Compare deals from 100+ UK lenders.",
    content: [
      {
        heading: "What is a Fixed Rate Mortgage?",
        paragraphs: [
          "A fixed rate mortgage is a type of home loan where the interest rate remains constant for a set period, typically ranging from 2 to 10 years. This means your monthly repayments stay the same throughout the fixed period, regardless of what happens to the Bank of England base rate or general market conditions. For many homeowners looking to remortgage, fixed rates offer invaluable peace of mind and budgeting certainty.",
          "The most popular fixed rate terms in the UK are 2-year and 5-year fixes. A 2-year fix typically offers slightly lower rates but means you'll need to remortgage more frequently. A 5-year fix provides longer-term stability, though rates may be marginally higher. Some lenders now offer 10-year fixed rates for those seeking maximum security against rate rises.",
        ],
      },
      {
        heading: "Pros and Cons of Fixed Rate Mortgages",
        paragraphs: [
          "The main advantage of a fixed rate mortgage is predictability. You know exactly what you'll pay each month, making budgeting straightforward and protecting you from interest rate increases. This is particularly valuable in uncertain economic times when rates may rise. Fixed rates also make it easier to plan for other expenses and financial goals.",
          "However, there are some drawbacks to consider. If interest rates fall during your fixed period, you won't benefit from lower payments. Additionally, fixed rate mortgages often come with early repayment charges (ERCs) if you want to switch before your term ends. These charges can be substantial, sometimes 1-5% of the outstanding balance, so it's important to choose your fixed term carefully.",
        ],
      },
      {
        heading: "Who Should Consider a Fixed Rate Mortgage?",
        paragraphs: [
          "Fixed rate mortgages are ideal for borrowers who value financial stability and want protection against rising interest rates. They're particularly suitable for first-time buyers getting used to homeownership costs, families with tight monthly budgets, or anyone who prefers knowing exactly what their outgoings will be. If you're remortgaging and concerned about potential rate increases, fixing now could save you money in the long run.",
          "The right fixed term depends on your circumstances. If you might need to move within the next few years, a 2-year fix with lower ERCs might be sensible. If you're settled and want long-term stability, a 5 or 10-year fix could be worth considering, even if the initial rate is slightly higher.",
        ],
      },
      {
        heading: "Current Fixed Rate Market Conditions",
        paragraphs: [
          "Fixed mortgage rates fluctuate based on various economic factors, including the Bank of England base rate, inflation expectations, and competition between lenders. Speaking with an FCA-regulated broker ensures you get access to the latest rates from across the market, including exclusive deals not available directly from lenders.",
        ],
      },
    ],
    relatedDeals: ["tracker", "variable", "remortgage"],
  },
  {
    slug: "tracker",
    title: "Tracker Mortgages",
    metaTitle: "Tracker Mortgage Deals - Compare Rates | Remortgage Advisor",
    metaDescription: "Compare tracker mortgage deals that follow the Bank of England base rate. Understand the pros and cons of tracker mortgages and get free expert advice.",
    heroTitle: "Tracker Mortgage Deals - Compare Rates",
    heroDescription: "Benefit from rate reductions with a tracker mortgage that follows the Bank of England base rate. Compare deals from leading UK lenders.",
    content: [
      {
        heading: "How Do Tracker Mortgages Work?",
        paragraphs: [
          "A tracker mortgage has an interest rate that tracks the Bank of England base rate at a set margin above or below it. For example, if your tracker is set at base rate plus 1%, and the base rate is 4%, you'd pay 5% interest. When the base rate changes, your mortgage rate automatically adjusts, meaning your monthly payments can go up or down. For those looking to remortgage, trackers offer the potential to benefit immediately from any base rate cuts.",
          "Most tracker mortgages have a defined tracking period, typically 2-5 years, after which you'll move to the lender's Standard Variable Rate (SVR). Some lenders offer lifetime trackers that continue for the entire mortgage term. The margin above base rate varies between lenders and depends on factors like your loan-to-value ratio and credit history.",
        ],
      },
      {
        heading: "Advantages of Tracker Mortgages",
        paragraphs: [
          "The primary benefit of a tracker mortgage is transparency - you always know exactly how your rate is calculated based on the Bank of England base rate. If the base rate falls, your payments reduce immediately without needing to remortgage. Trackers also tend to have more flexibility than fixed rates, with some offering no early repayment charges, making them suitable if you might move or remortgage before your term ends.",
          "Tracker mortgages can work out cheaper than fixed rates over time, particularly if interest rates remain stable or fall. They're also simpler to understand than some variable rate products, as the link to the base rate is clear and predictable.",
        ],
      },
      {
        heading: "Risks to Consider",
        paragraphs: [
          "The flip side of tracking the base rate is that your payments will increase if rates rise. This can make budgeting more challenging and potentially stretch your finances if rates climb significantly. Before choosing a tracker, consider whether you could afford higher payments if rates increased by 1-2% or more.",
          "Some tracker mortgages have a 'collar' - a minimum rate below which your interest can't fall, even if the base rate drops further. Check the terms carefully to understand any caps or collars that might apply to your deal.",
        ],
      },
      {
        heading: "Is a Tracker Right for You?",
        paragraphs: [
          "Tracker mortgages suit borrowers who are comfortable with some payment variability and believe interest rates are likely to stay stable or fall. They're particularly appealing if you value flexibility and want the option to remortgage without facing early repayment charges. Our FCA-regulated advisors can help you assess whether a tracker is suitable for your circumstances and compare the best deals available.",
        ],
      },
    ],
    relatedDeals: ["fixed-rate", "variable", "offset"],
  },
  {
    slug: "variable",
    title: "Variable Rate Mortgages",
    metaTitle: "Variable Rate Mortgages - Compare Deals | Remortgage Advisor",
    metaDescription: "Understand variable rate mortgages including SVR. Learn when to remortgage off your SVR and compare better deals from 100+ UK lenders.",
    heroTitle: "Variable Rate Mortgages - Compare Deals",
    heroDescription: "Are you on your lender's Standard Variable Rate? You could be paying more than you need to. Compare better deals today.",
    content: [
      {
        heading: "What is a Variable Rate Mortgage?",
        paragraphs: [
          "A variable rate mortgage, often called a Standard Variable Rate (SVR) mortgage, has an interest rate that can change at your lender's discretion. Unlike tracker mortgages which follow the Bank of England base rate, SVRs are set by individual lenders and can move independently of official rates. When your fixed or tracker deal ends, you'll typically move onto your lender's SVR, which is usually higher than introductory rates.",
          "SVRs are typically the most expensive mortgage option, with rates often 1-2% higher than the best fixed or tracker deals. For homeowners looking to remortgage, moving off an SVR can result in significant monthly savings. Even a 1% reduction on a £200,000 mortgage could save you over £100 per month.",
        ],
      },
      {
        heading: "Why You Should Consider Remortgaging Off Your SVR",
        paragraphs: [
          "If you're currently on your lender's SVR, you're almost certainly paying more than necessary. Lenders don't typically offer their best rates to existing SVR customers - these are reserved for new business. By remortgaging, you can access competitive deals and potentially save thousands of pounds over the life of your mortgage.",
          "The remortgage process is straightforward and often free of charge if you work with a broker. Your new lender may even cover legal fees and valuation costs. Start looking for a new deal around 6 months before your current fixed or tracker rate ends to avoid falling onto the SVR at all.",
        ],
      },
      {
        heading: "When Might an SVR Make Sense?",
        paragraphs: [
          "While SVRs are generally more expensive, there are rare situations where staying on one might suit you. If you're planning to move home or pay off your mortgage within a few months, avoiding a new fixed rate with early repayment charges could be sensible. SVRs also offer complete flexibility - you can usually overpay without limits or move without penalties.",
          "However, for most borrowers, the higher cost of an SVR far outweighs these benefits. Our advisors can help you calculate whether switching to a new deal makes financial sense in your situation.",
        ],
      },
      {
        heading: "Compare SVR Alternatives Today",
        paragraphs: [
          "Don't stay on an expensive SVR longer than necessary. By comparing deals from over 100 UK lenders, our FCA-regulated brokers can find you a better rate and handle the remortgage process from start to finish. Fill in our form for a free, no-obligation quote and see how much you could save.",
        ],
      },
    ],
    relatedDeals: ["fixed-rate", "tracker", "remortgage"],
  },
  {
    slug: "bad-credit",
    title: "Bad Credit Mortgages",
    metaTitle: "Bad Credit Mortgage Deals - Can You Still Remortgage? | Remortgage Advisor",
    metaDescription: "Get mortgage advice for bad credit situations including CCJs, defaults and missed payments. Compare specialist lenders and find out your options.",
    heroTitle: "Bad Credit Mortgage Deals - Can You Still Remortgage?",
    heroDescription: "Past credit problems don't have to stop you getting a mortgage. Specialist lenders can help - find out your options today.",
    content: [
      {
        heading: "Can You Get a Mortgage with Bad Credit?",
        paragraphs: [
          "Yes, it's possible to get a mortgage with bad credit, though your options may be more limited and rates typically higher than standard deals. If you're looking to remortgage with adverse credit history, specialist lenders exist who consider applications from borrowers with CCJs, defaults, missed payments, debt management plans, or even previous bankruptcies.",
          "The mortgage market has evolved significantly, with many specialist lenders now focusing specifically on borrowers with imperfect credit histories. While high street banks may decline your application, these lenders take a more nuanced view of your circumstances and can often find solutions where others can't.",
        ],
      },
      {
        heading: "What Counts as Bad Credit?",
        paragraphs: [
          "Bad credit can include a range of issues: County Court Judgments (CCJs), defaults on credit agreements, missed payments on loans, credit cards or utility bills, Individual Voluntary Arrangements (IVAs), debt management plans, or bankruptcy. The severity impacts your options - recent issues or larger amounts are viewed more seriously than older, smaller problems.",
          "Lenders look at how long ago credit issues occurred, the amounts involved, and how your credit behaviour has improved since. A CCJ from 5 years ago with an otherwise clean recent history is viewed differently to one registered last year. Each lender has different criteria, which is why working with a broker who knows the specialist market is valuable.",
        ],
      },
      {
        heading: "Which Lenders Consider Bad Credit Mortgages?",
        paragraphs: [
          "Specialist lenders like Kensington, Pepper Money, Precise Mortgages, and Bluestone focus on helping borrowers with adverse credit. These lenders manually underwrite applications, considering your full circumstances rather than relying solely on credit scores. They're accustomed to explaining credit issues and finding appropriate solutions.",
          "The rates offered by specialist lenders will typically be higher than mainstream products, reflecting the additional risk they take on. However, as your credit history improves over time, you can remortgage again to access better rates. Many borrowers use a specialist mortgage as a stepping stone back to mainstream lending.",
        ],
      },
      {
        heading: "LTV Requirements for Bad Credit",
        paragraphs: [
          "Loan-to-value (LTV) requirements are often stricter for bad credit mortgages. While mainstream lenders might offer 95% LTV deals, specialist lenders may require you to have more equity, often limiting lending to 85% or 80% LTV depending on your credit issues. The more equity you have, the more options become available and the better rates you can access.",
          "If you're remortgaging and your property has increased in value, you may find yourself in a better LTV position than when you first bought, potentially opening up more lending options despite your credit history.",
        ],
      },
      {
        heading: "Get Expert Bad Credit Mortgage Advice",
        paragraphs: [
          "Our FCA-regulated brokers specialise in finding mortgage solutions for borrowers with credit problems. We'll assess your situation, explain your options clearly, and match you with appropriate lenders. Complete our form for a free, no-obligation consultation and take the first step toward securing your remortgage.",
        ],
      },
    ],
    relatedDeals: ["self-employed", "remortgage", "buy-to-let"],
  },
  {
    slug: "buy-to-let",
    title: "Buy to Let Mortgages",
    metaTitle: "Buy to Let Mortgage Deals - Compare BTL Rates | Remortgage Advisor",
    metaDescription: "Compare buy to let mortgage rates from specialist BTL lenders. Understand rental coverage calculations, limited company options and portfolio landlord requirements.",
    heroTitle: "Buy to Let Mortgage Deals - Compare BTL Rates",
    heroDescription: "Whether you're a first-time landlord or expanding your portfolio, compare competitive buy to let rates from leading UK lenders.",
    content: [
      {
        heading: "Understanding Buy to Let Mortgages",
        paragraphs: [
          "Buy to let mortgages are specifically designed for properties you intend to rent out rather than live in. They work differently to residential mortgages, with lenders primarily assessing whether the rental income will cover the mortgage payments rather than focusing solely on your personal income. If you're a landlord looking to remortgage your BTL property, you could access better rates and potentially release equity for further investments.",
          "BTL mortgage rates are typically 0.5-1% higher than residential rates, and most lenders require a minimum 25% deposit (75% LTV), though some specialist products are available at higher LTVs. The mortgage is usually arranged on an interest-only basis, keeping monthly payments lower and maximising rental yield.",
        ],
      },
      {
        heading: "Rental Coverage Calculations",
        paragraphs: [
          "Lenders use rental coverage ratios to assess BTL applications. Most require the expected rent to be 125-145% of the mortgage payment at a stress-tested interest rate (typically 5.5% or higher). For example, if your monthly mortgage payment would be £1,000, you'd need to demonstrate rental income of £1,250-£1,450 per month.",
          "Higher-rate taxpayers often face stricter requirements, sometimes needing 145% rental coverage compared to 125% for basic-rate taxpayers. This is because Section 24 tax changes mean mortgage interest is no longer fully deductible against rental income for individual landlords, affecting their net profit.",
        ],
      },
      {
        heading: "Limited Company Buy to Let",
        paragraphs: [
          "Many landlords now purchase investment properties through limited companies (SPVs - Special Purpose Vehicles) due to tax advantages following Section 24 changes. Companies can still claim full mortgage interest relief, making this structure more tax-efficient for higher-rate taxpayers. Remortgaging existing personal BTL properties into a limited company is more complex and may trigger stamp duty charges.",
          "Not all lenders offer limited company BTL mortgages, but the market has grown significantly. Rates for company BTLs are typically slightly higher than personal BTLs, but the tax savings often outweigh this cost. Our brokers can advise whether a limited company structure makes sense for your portfolio.",
        ],
      },
      {
        heading: "Portfolio Landlord Requirements",
        paragraphs: [
          "If you own four or more mortgaged buy to let properties, you're classified as a portfolio landlord. This triggers additional underwriting requirements under PRA (Prudential Regulation Authority) rules. Lenders will assess your entire property portfolio, including properties with other lenders, looking at overall exposure and risk.",
          "Portfolio landlords need to provide more documentation, including a full portfolio schedule, property valuations, and evidence of experience in property management. Some lenders specialise in portfolio landlords and offer streamlined processes. Our brokers have access to these specialist lenders and can help navigate the additional requirements.",
        ],
      },
      {
        heading: "Compare Buy to Let Deals Today",
        paragraphs: [
          "Whether you're a first-time landlord, looking to expand your portfolio, or simply remortgaging to a better rate, our FCA-regulated brokers can help. We compare BTL deals from specialist lenders across the market, including options for limited companies and portfolio landlords. Complete our form for a free, no-obligation quote.",
        ],
      },
    ],
    relatedDeals: ["limited-company-buy-to-let", "interest-only", "remortgage"],
  },
  {
    slug: "interest-only",
    title: "Interest Only Mortgages",
    metaTitle: "Interest Only Mortgage Deals - Compare Rates & Lenders | Remortgage Advisor",
    metaDescription: "Compare interest only mortgage deals and understand repayment vehicle requirements. Find out which lenders still offer interest only and get expert advice.",
    heroTitle: "Interest Only Mortgage Deals - Compare Rates & Lenders",
    heroDescription: "Lower your monthly payments with an interest only mortgage. Understand the requirements and compare available deals.",
    content: [
      {
        heading: "How Interest Only Mortgages Work",
        paragraphs: [
          "With an interest only mortgage, your monthly payments cover only the interest charged on your loan - you're not paying off the capital (the original amount borrowed). This means significantly lower monthly payments compared to a repayment mortgage, but you'll still owe the full loan amount at the end of the term. For homeowners looking to remortgage, interest only can free up monthly cash flow, but you need a solid plan to repay the capital.",
          "For example, on a £200,000 mortgage at 4% interest, monthly payments would be around £667 for interest only versus approximately £1,055 for a repayment mortgage over 25 years. That's nearly £400 per month difference - but remember, with interest only you'd still owe £200,000 at the end.",
        ],
      },
      {
        heading: "Repayment Vehicles Explained",
        paragraphs: [
          "To get an interest only mortgage, lenders require a credible 'repayment vehicle' - a plan for how you'll pay off the capital at the end of the term. Acceptable repayment vehicles vary between lenders but typically include sale of the mortgaged property (if you have sufficient equity), sale of another property, investments or savings, pension lump sums, or endowment policies.",
          "Lenders have become stricter about repayment vehicles since the 2014 Mortgage Market Review. Simply hoping house prices will rise isn't considered a valid plan. You'll need to demonstrate how your chosen method will realistically cover the loan amount, which usually requires providing evidence of existing savings, investments, or property equity.",
        ],
      },
      {
        heading: "Which Lenders Offer Interest Only?",
        paragraphs: [
          "Residential interest only mortgages have become harder to find, but they're not impossible. Many lenders restrict interest only to higher-value properties or require maximum 50-75% LTV. Some building societies and specialist lenders are more flexible than high street banks. For buy to let properties, interest only remains the standard approach.",
          "Common requirements include minimum property values of £250,000-£500,000, maximum LTV of 50-75%, and minimum loan sizes. Each lender has different criteria, which is why broker advice is valuable - we know which lenders accept which repayment vehicles and can match you with suitable options.",
        ],
      },
      {
        heading: "Risks and Considerations",
        paragraphs: [
          "The main risk with interest only is ending your mortgage term still owing the full loan amount without a way to repay it. This has affected thousands of borrowers who took out interest only mortgages decades ago without adequate planning. It's crucial to regularly review your repayment vehicle and ensure it remains on track.",
          "Consider whether part-and-part might be a better option - where part of your mortgage is interest only and part repayment. This gives you some flexibility while still paying down some capital each month. Our advisors can help you understand the pros and cons of different structures.",
        ],
      },
    ],
    relatedDeals: ["buy-to-let", "remortgage", "fixed-rate"],
  },
  {
    slug: "self-employed",
    title: "Self Employed Mortgages",
    metaTitle: "Self Employed Mortgage Deals - Get Approved | Remortgage Advisor",
    metaDescription: "Self employed mortgage advice for sole traders, contractors and company directors. Understand what lenders look for and compare deals from 100+ lenders.",
    heroTitle: "Self Employed Mortgage Deals - Get Approved",
    heroDescription: "Self employed? Don't let income complexity hold you back. Compare mortgage deals from lenders who understand self-employment.",
    content: [
      {
        heading: "Getting a Mortgage When Self Employed",
        paragraphs: [
          "Self employed borrowers face additional scrutiny when applying for mortgages, but with the right preparation and lender choice, approval is absolutely achievable. Lenders want to see evidence of stable, sustainable income - they're assessing whether your business can support mortgage payments reliably. For self-employed homeowners looking to remortgage, demonstrating consistent or growing income over recent years is key.",
          "The good news is that self-employment is increasingly common, and lenders have adapted their criteria accordingly. Many now have specialist underwriters who understand the nuances of business accounts and can assess applications appropriately. The key is finding lenders whose criteria match your specific situation.",
        ],
      },
      {
        heading: "What Lenders Look For",
        paragraphs: [
          "Most lenders require at least two years of accounts or tax returns, though some will consider one year's evidence. They'll typically look at your SA302 tax calculations and tax year overviews from HMRC, plus your business accounts if you're a limited company director. The figures used depend on your business structure.",
          "For sole traders and partnerships, lenders generally assess your net profit (after business expenses, before personal tax). For limited company directors, they'll look at a combination of salary and dividends - some lenders use salary plus dividends actually taken, while others will consider your share of net profit. Each lender calculates income differently, so the same accounts can produce different borrowing amounts.",
        ],
      },
      {
        heading: "Sole Trader vs Limited Company Director",
        paragraphs: [
          "How income is calculated differs significantly between business structures. Sole traders have simpler assessments based on net profit, but limited company directors can be more complex. If you pay yourself a small salary and retain profits in the company, some lenders may not recognise your full earning capacity.",
          "Contractors working through limited companies (often called 'umbrella companies' or 'personal service companies') may benefit from specialist contractor mortgage products. These can calculate affordability based on day rate rather than dividends drawn, potentially increasing borrowing capacity significantly. Not all lenders offer this, but those that do understand the contractor market well.",
        ],
      },
      {
        heading: "Lenders That Specialise in Self Employed",
        paragraphs: [
          "While high street banks can approve self-employed applications, specialist lenders often offer more flexibility. Names like Kensington, Precise Mortgages, Aldermore, and others have built expertise in self-employed lending. They're more likely to take a holistic view of your circumstances rather than rigidly applying criteria.",
          "Some lenders will consider just one year's accounts, accept retained profits, or use projected future earnings in certain circumstances. Finding the right lender for your situation can make the difference between decline and approval - this is where broker expertise adds real value.",
        ],
      },
      {
        heading: "Get Expert Self Employed Mortgage Advice",
        paragraphs: [
          "Don't let self-employment status hold you back from remortgaging. Our FCA-regulated brokers understand self-employed lending criteria across the market and can match you with lenders most likely to approve your application. Complete our form for a free consultation and let us find the right solution for your circumstances.",
        ],
      },
    ],
    relatedDeals: ["bad-credit", "buy-to-let", "remortgage"],
  },
  {
    slug: "first-time-buyer",
    title: "First Time Buyer Mortgages",
    metaTitle: "First Time Buyer Mortgage Deals - Compare Rates | Remortgage Advisor",
    metaDescription: "Compare first time buyer mortgage deals with low deposits. Learn about 95% mortgages, government schemes and best lenders for first time buyers.",
    heroTitle: "First Time Buyer Mortgage Deals - Compare Rates",
    heroDescription: "Taking your first step onto the property ladder? Compare competitive rates and find the right mortgage for your first home.",
    content: [
      {
        heading: "First Time Buyer Mortgages Explained",
        paragraphs: [
          "As a first time buyer, you're entering the mortgage market for the first time, which can feel overwhelming. The good news is that many lenders offer products specifically designed for first time buyers, sometimes with preferential rates or reduced fees. While first time buyers won't be remortgaging, understanding your options from the start helps you choose a deal that you'll be happy with when renewal time comes.",
          "First time buyers typically need to save a deposit of at least 5-10% of the property purchase price, though larger deposits unlock better interest rates. Other costs include stamp duty (currently waived for first time buyers on properties up to £425,000), solicitor fees, survey costs, and moving expenses.",
        ],
      },
      {
        heading: "Deposit Requirements and 95% Mortgages",
        paragraphs: [
          "While 5% deposit mortgages are available, be aware that rates are significantly higher than those offered at 10%, 15%, or 20% deposit levels. Each threshold typically brings better rates, so saving a little extra can save you money over your mortgage term. The jump from 95% to 90% LTV often makes the biggest difference to available rates.",
          "95% mortgages are offered by many high street lenders including Barclays, HSBC, Nationwide, NatWest, and Santander. The government's mortgage guarantee scheme supports these products by providing lenders with a guarantee against losses, encouraging them to offer high LTV deals at reasonable rates.",
        ],
      },
      {
        heading: "Government Schemes for First Time Buyers",
        paragraphs: [
          "Several government initiatives exist to help first time buyers. Shared Ownership allows you to buy a share of a property (typically 25-75%) and pay rent on the remainder. The First Homes scheme offers newly built homes at 30-50% discount to first time buyers. Lifetime ISAs provide a 25% government bonus on savings up to £4,000 per year for buying a first home.",
          "While the Help to Buy equity loan scheme has ended for new applications, those who bought using Help to Buy are now approaching the point where equity loan interest begins, making it an important time to review remortgage options.",
        ],
      },
      {
        heading: "Best Lenders for First Time Buyers",
        paragraphs: [
          "Several lenders have strong first time buyer propositions. Nationwide often leads on rates for higher LTV products. Skipton Building Society has introduced innovative 'Track Record' mortgages considering rental payment history for those without traditional deposits. Halifax, NatWest, and HSBC all offer competitive first time buyer ranges with various cashback and fee-free options.",
          "The best lender depends on your specific circumstances - deposit size, income, credit history, and the property you're buying all affect which deals are available. A broker can search the whole market to find the most suitable option.",
        ],
      },
      {
        heading: "Get Started on Your First Home",
        paragraphs: [
          "Ready to take the first step? Our FCA-regulated brokers can guide you through the first time buyer mortgage process, explaining your options and finding competitive deals from across the market. Complete our form for free, no-obligation advice tailored to your circumstances.",
        ],
      },
    ],
    relatedDeals: ["help-to-buy", "fixed-rate", "home-mover"],
  },
  {
    slug: "right-to-buy",
    title: "Right to Buy Mortgages",
    metaTitle: "Right to Buy Mortgage Deals - Compare Lenders | Remortgage Advisor",
    metaDescription: "Compare Right to Buy mortgage lenders and understand discount amounts. Find out how RTB discounts affect your mortgage deposit requirements.",
    heroTitle: "Right to Buy Mortgage Deals - Compare Lenders",
    heroDescription: "Buying your council or housing association home? Your Right to Buy discount can act as your deposit. Compare mortgage deals today.",
    content: [
      {
        heading: "Understanding Right to Buy",
        paragraphs: [
          "Right to Buy allows eligible council and housing association tenants in England to purchase their home at a discount. This discount can be substantial - up to £87,200 in most of England or £116,200 in London (2024 figures). The discount can act as your mortgage deposit, meaning you may not need any savings to buy your home. For those who've previously bought under Right to Buy and are looking to remortgage, competitive deals are available from many lenders.",
          "The discount amount depends on how long you've been a tenant - starting at 35% of the property value for houses (50% for flats) and increasing by 1% for each extra year (2% for flats), up to a maximum of 70% or the cash cap, whichever is lower.",
        ],
      },
      {
        heading: "How Right to Buy Discounts Work as a Deposit",
        paragraphs: [
          "Your Right to Buy discount can be used as a deposit instead of cash savings. For example, if your home is valued at £200,000 and you're entitled to a 40% discount (£80,000), you'd only pay £120,000. That £80,000 discount gives you 40% equity immediately, meaning you'd need a mortgage of just £120,000 at 60% LTV - which unlocks competitive interest rates.",
          "Some lenders will let you borrow the full purchase price after discount, meaning you need no cash deposit at all. Others may want you to contribute some savings. Each lender has different criteria for Right to Buy mortgages.",
        ],
      },
      {
        heading: "Which Lenders Accept Right to Buy?",
        paragraphs: [
          "Many mainstream lenders offer Right to Buy mortgages, including Halifax, Nationwide, NatWest, and others. Some have specific Right to Buy products, while others simply accept RTB as a valid route to the deposit required for standard products. Building societies often have flexible criteria for RTB applications.",
          "Important considerations include whether the lender will lend on your specific property type (some ex-council properties may be non-standard construction) and whether they require a cash contribution from you. A broker familiar with RTB can quickly identify suitable lenders for your situation.",
        ],
      },
      {
        heading: "Discount Repayment Rules",
        paragraphs: [
          "Be aware that Right to Buy discounts come with strings attached. If you sell your home within 5 years of buying, you'll have to repay some or all of the discount - 100% if sold in year 1, reducing by 20% each year. After 5 years, the discount is fully yours. Additionally, if you sell within 10 years, you must first offer it to your old landlord or another social landlord at market value.",
          "These rules are designed to prevent profiteering from the scheme. They're worth understanding before committing, though they don't affect your ability to remortgage to a better deal - only selling the property triggers repayment.",
        ],
      },
    ],
    relatedDeals: ["first-time-buyer", "fixed-rate", "remortgage"],
  },
  {
    slug: "offset",
    title: "Offset Mortgages",
    metaTitle: "Offset Mortgage Deals - How They Work & Best Rates | Remortgage Advisor",
    metaDescription: "Understand how offset mortgages work and whether linking savings to your mortgage could save you money. Compare offset deals from leading lenders.",
    heroTitle: "Offset Mortgage Deals - How They Work & Best Rates",
    heroDescription: "Use your savings to reduce your mortgage interest without locking them away. Compare offset mortgage deals from specialist lenders.",
    content: [
      {
        heading: "How Offset Mortgages Work",
        paragraphs: [
          "An offset mortgage links your savings account to your mortgage, reducing the amount of interest you pay. Instead of earning interest on your savings, you offset them against your mortgage balance so you're charged interest on a smaller amount. For example, with a £200,000 mortgage and £30,000 in savings, you'd only pay interest on £170,000. For homeowners with significant savings looking to remortgage, offset products can offer substantial long-term savings.",
          "Your savings remain accessible - they're not used to pay off the mortgage and you can withdraw them whenever needed. However, using them does mean you're no longer offsetting that amount, so your mortgage interest charges would increase accordingly.",
        ],
      },
      {
        heading: "Who Benefits Most from Offset Mortgages?",
        paragraphs: [
          "Offset mortgages work best for people with substantial savings who want to keep them accessible while still benefiting. Higher-rate taxpayers particularly benefit because offsetting is tax-free (you're not earning interest, so there's nothing to tax), whereas savings interest would be taxable above your allowance.",
          "They're also useful for business owners or self-employed people who keep cash reserves for tax bills - you can offset this money against your mortgage until the tax is due. Similarly, anyone expecting a large payment (inheritance, bonus, property sale proceeds) who wants short-term flexibility can benefit.",
        ],
      },
      {
        heading: "Offset vs Standard Mortgage with Savings",
        paragraphs: [
          "Whether an offset mortgage is worthwhile depends on the rate difference compared to standard mortgages and how much you'll offset. Offset rates are typically 0.2-0.5% higher than equivalent non-offset products. If your savings are small, the interest saved might not compensate for the higher rate.",
          "For example, offsetting £10,000 on a £200,000 mortgage might save you £400 per year in interest (at 4%), but if the offset rate is 0.3% higher, you're paying an extra £600 on the full mortgage. The maths only works in your favour with larger savings balances.",
        ],
      },
      {
        heading: "Lenders Offering Offset Mortgages",
        paragraphs: [
          "Offset mortgages are a specialist product not offered by all lenders. Notable providers include First Direct (known for competitive offset rates), Barclays, Yorkshire Building Society, Coventry Building Society, and Family Building Society. Each has different features - some allow you to link family members' savings, others offer flexible overpayment features.",
          "Our brokers can compare offset products from across the market and help you calculate whether an offset mortgage would genuinely save you money based on your savings levels and circumstances.",
        ],
      },
    ],
    relatedDeals: ["fixed-rate", "tracker", "remortgage"],
  },
  {
    slug: "discount",
    title: "Discount Rate Mortgages",
    metaTitle: "Discount Rate Mortgage Deals - Compare Rates | Remortgage Advisor",
    metaDescription: "Understand discount rate mortgages and how they differ from fixed and tracker deals. Compare discount mortgage rates from UK lenders.",
    heroTitle: "Discount Rate Mortgage Deals - Compare Rates",
    heroDescription: "Enjoy a rate below your lender's SVR with a discount mortgage. Compare deals and understand the pros and cons.",
    content: [
      {
        heading: "What is a Discount Rate Mortgage?",
        paragraphs: [
          "A discount rate mortgage offers an interest rate set at a fixed percentage below your lender's Standard Variable Rate (SVR). For example, if the SVR is 6.5% and your discount is 1%, you'd pay 5.5%. Unlike tracker mortgages which follow the Bank of England base rate, discount mortgages follow your specific lender's SVR - which can change at the lender's discretion.",
          "Discount mortgages typically last 2-5 years, after which you'd move onto the full SVR unless you remortgage to a new deal. They can offer attractive initial rates, but the variable nature means your payments can change during the discount period.",
        ],
      },
      {
        heading: "Discount vs Tracker vs Fixed",
        paragraphs: [
          "The key difference between discount and tracker mortgages is what they're linked to. Trackers follow the Bank of England base rate transparently, while discounts follow the lender's SVR which they can change independently. This means discount rates can move even if the base rate stays the same, if the lender chooses to adjust their SVR.",
          "Compared to fixed rates, discount mortgages offer potential for payment reductions if rates fall, but carry the risk of increases. Fixed rates provide certainty but you won't benefit from any rate decreases. Discount rates often come with lower or no early repayment charges, offering more flexibility than fixes.",
        ],
      },
      {
        heading: "Are Discount Mortgages Worth Considering?",
        paragraphs: [
          "Discount mortgages have become less common as trackers and fixed rates have dominated the market. Their main appeal is flexibility - often with lower early repayment charges than fixed rates. They might suit you if you want some rate variation potential but don't want the full exposure of a tracker.",
          "However, the lack of transparency compared to trackers is a drawback. Your lender could increase their SVR without any base rate change, raising your payments unexpectedly. For most borrowers, the certainty of a fix or the transparency of a tracker is preferable to a discount rate.",
        ],
      },
    ],
    relatedDeals: ["tracker", "variable", "fixed-rate"],
  },
  {
    slug: "remortgage",
    title: "Remortgage Deals",
    metaTitle: "Remortgage Deals - Compare the Best UK Rates | Remortgage Advisor",
    metaDescription: "Compare remortgage deals from 100+ UK lenders. Learn when to remortgage, how much you could save, and get expert advice from FCA regulated brokers.",
    heroTitle: "Remortgage Deals - Compare the Best UK Rates",
    heroDescription: "Save money by switching to a better mortgage deal. Compare rates from leading UK lenders and find out how much you could save.",
    content: [
      {
        heading: "Why Remortgage?",
        paragraphs: [
          "Remortgaging means switching your existing mortgage to a new deal, either with your current lender (a product transfer) or with a different lender. The primary reason most people remortgage is to save money by moving to a lower interest rate. When your initial fixed or tracker rate ends, you typically move onto your lender's Standard Variable Rate (SVR), which is usually significantly higher than the best available deals.",
          "Other reasons to remortgage include releasing equity (borrowing more against your property's value), consolidating debts, funding home improvements, or changing your mortgage terms. Whatever your reason, comparing remortgage options regularly ensures you're not paying more than necessary.",
        ],
      },
      {
        heading: "When Should You Remortgage?",
        paragraphs: [
          "The best time to start looking for a new remortgage deal is around 6 months before your current rate ends. This gives you time to compare options, submit applications, and complete the process before you fall onto the SVR. Many mortgage offers are valid for 3-6 months, so you can secure a rate early and let it start when your current deal ends.",
          "If you're already on your lender's SVR, you're likely overpaying and should consider remortgaging immediately. Even small rate reductions can save hundreds of pounds per month. There's no need to wait for a specific date - the sooner you switch, the sooner you start saving.",
        ],
      },
      {
        heading: "How Much Could You Save?",
        paragraphs: [
          "Savings depend on your current rate versus available deals, plus your mortgage balance. Someone on a 7% SVR switching to a 4.5% fix on a £250,000 mortgage could save over £500 per month - more than £6,000 per year. Even a 0.5% improvement makes a meaningful difference.",
          "Use our free service to compare rates and get a personalised quote showing exactly how much you could save. Our brokers search deals from over 100 lenders, including exclusive rates not available directly.",
        ],
      },
      {
        heading: "The Remortgage Process Step by Step",
        paragraphs: [
          "Remortgaging is straightforward with broker assistance. First, we'll assess your situation and search for the best deals. Once you choose a product, we'll submit your application with all necessary documents. The new lender will value your property (often free for remortgages) and complete their underwriting. Finally, solicitors handle the legal transfer - many remortgage deals include free legal services.",
          "The process typically takes 4-8 weeks from application to completion. Throughout, your broker manages communications with lenders and solicitors, keeping the process moving and updating you on progress.",
        ],
      },
      {
        heading: "Start Comparing Remortgage Deals Today",
        paragraphs: [
          "Don't wait until you're paying unnecessary interest on your lender's SVR. Complete our simple form to get free, personalised remortgage quotes from across the market. Our FCA-regulated brokers will explain your options clearly and help you choose the best deal for your circumstances - with no obligation to proceed.",
        ],
      },
    ],
    relatedDeals: ["fixed-rate", "tracker", "variable"],
  },
  {
    slug: "help-to-buy",
    title: "Help to Buy Mortgages",
    metaTitle: "Help to Buy Mortgage Deals - What Are Your Options Now? | Remortgage Advisor",
    metaDescription: "Help to Buy scheme has ended but remortgage options exist for existing borrowers. Understand equity loan interest and your refinancing options.",
    heroTitle: "Help to Buy Mortgage Deals - What Are Your Options Now?",
    heroDescription: "Bought with Help to Buy? Understand your equity loan, when interest starts, and your remortgage options.",
    content: [
      {
        heading: "History of Help to Buy",
        paragraphs: [
          "The Help to Buy equity loan scheme ran from 2013 to 2023, helping over 350,000 households buy newly built homes. Buyers could purchase with just a 5% deposit, with the government lending up to 20% of the property value (40% in London) as an equity loan, interest-free for the first five years. This made homeownership accessible to many who couldn't otherwise afford the deposit required.",
          "The scheme closed to new applications in October 2022, with all completions required by March 2023. However, hundreds of thousands of homeowners still have Help to Buy equity loans, and understanding your options as a Help to Buy borrower is crucial for managing your finances effectively.",
        ],
      },
      {
        heading: "When Equity Loan Interest Begins",
        paragraphs: [
          "Help to Buy equity loans are interest-free for the first five years. After that, interest charges begin at 1.75% of the loan amount annually, increasing each year by the Consumer Price Index (CPI) plus 2%. These charges are in addition to your mortgage payments and can add significantly to your monthly housing costs.",
          "For many Help to Buy borrowers, the fifth anniversary of their purchase marks an important decision point. Before interest kicks in, you might consider repaying part or all of the equity loan through savings, remortgaging to release equity, or accepting the ongoing interest charges if they're manageable within your budget.",
        ],
      },
      {
        heading: "Remortgaging with Help to Buy",
        paragraphs: [
          "You can remortgage your main mortgage while still having an equity loan in place - you don't need to repay the government loan to switch mortgage deals. Many Help to Buy borrowers remortgage when their initial fixed rate ends, just like any other homeowner. The equity loan remains as a second charge on the property.",
          "However, if you want to borrow more through remortgaging (for home improvements, for example), this becomes more complex. You'd need permission from Homes England, and the additional borrowing sits behind both your new mortgage and the equity loan, making some lenders cautious.",
        ],
      },
      {
        heading: "Repaying Your Equity Loan",
        paragraphs: [
          "You can repay your Help to Buy equity loan at any time, either partially (minimum 10% of current property value) or in full. To repay, you need a valuation from a RICS surveyor - the amount you owe is calculated as a percentage of your home's current value, not the original purchase price. If your home has increased in value, you'll owe more than the original loan amount.",
          "Many homeowners remortgage to raise the funds to repay their equity loan, especially if their property has gained value and they can now access better LTV rates. This consolidates your debt into a single mortgage payment. Our brokers can explain your options and search for remortgage deals that allow equity release for this purpose.",
        ],
      },
    ],
    relatedDeals: ["first-time-buyer", "remortgage", "fixed-rate"],
  },
  {
    slug: "home-mover",
    title: "Home Mover Mortgages",
    metaTitle: "Home Mover Mortgage Deals - Compare Rates | Remortgage Advisor",
    metaDescription: "Compare home mover mortgage deals for buying your next property. Understand porting, topping up your mortgage and when to get a new deal entirely.",
    heroTitle: "Home Mover Mortgage Deals - Compare Rates",
    heroDescription: "Moving to a new home? Compare mortgage options for home movers, including porting your existing deal or securing a new mortgage.",
    content: [
      {
        heading: "Mortgage Options When Moving Home",
        paragraphs: [
          "When you move to a new property, you have several mortgage options. You could port your existing mortgage, take it with you to your new home. Alternatively, you could repay your current mortgage and take out an entirely new one. Or you might port part of your mortgage and borrow additional funds on a new deal. Each option has pros and cons depending on your circumstances and current deal.",
          "The best approach depends on your existing mortgage terms, how much you need to borrow for your new home, current market rates, and any early repayment charges that might apply if you don't port your existing deal.",
        ],
      },
      {
        heading: "Porting Your Mortgage",
        paragraphs: [
          "Porting allows you to transfer your current mortgage deal to a new property. This can be useful if you have a competitive rate you want to keep, or if you'd face early repayment charges for ending your deal early. However, porting isn't automatic - you'll need to reapply and meet your lender's current criteria, and your new property must meet their requirements.",
          "If you're borrowing more than your current mortgage balance, you may be able to port your existing deal and take an additional mortgage for the extra amount. This additional borrowing will usually be on a different, potentially higher, rate. Not all lenders offer this flexibility, and the terms can be complex.",
        ],
      },
      {
        heading: "When to Get a New Mortgage",
        paragraphs: [
          "Sometimes a completely new mortgage makes more sense than porting. If your current rate is no longer competitive, or if you're near the end of your fixed term anyway, starting fresh with a new lender could save you money. Calculate whether any early repayment charges are offset by the savings from a better rate.",
          "A new mortgage also means a new application process, but this can work in your favour if your circumstances have improved - higher income, better credit score, or increased equity could unlock better rates than you had before.",
        ],
      },
      {
        heading: "Compare Home Mover Deals",
        paragraphs: [
          "Whether you're porting, switching, or starting fresh, our brokers can compare the options and find the best deal for your move. We'll calculate the true cost of each approach, factoring in early repayment charges, arrangement fees, and interest rates, so you can make an informed decision. Complete our form for free, no-obligation advice.",
        ],
      },
    ],
    relatedDeals: ["remortgage", "fixed-rate", "first-time-buyer"],
  },
  {
    slug: "limited-company-buy-to-let",
    title: "Limited Company Buy to Let",
    metaTitle: "Limited Company Buy to Let Mortgages - Compare Rates | Remortgage Advisor",
    metaDescription: "Compare limited company BTL mortgage rates from specialist lenders. Understand SPV companies, Section 24 tax benefits and portfolio options.",
    heroTitle: "Limited Company Buy to Let Mortgages - Compare Rates",
    heroDescription: "Buying investment property through a limited company? Compare specialist BTL mortgages designed for SPV structures.",
    content: [
      {
        heading: "Why Use a Limited Company for BTL?",
        paragraphs: [
          "Since April 2017, Section 24 tax changes have phased out mortgage interest relief for individual landlords. Higher and additional rate taxpayers can no longer deduct mortgage interest from rental income before calculating tax, significantly increasing their tax bills. Limited companies, however, can still deduct mortgage interest as a business expense, making them more tax-efficient for many landlords looking to expand their portfolio or remortgage existing properties.",
          "Using a Special Purpose Vehicle (SPV) - a limited company set up specifically to hold property - has become standard practice for many investors. While there are costs involved (company accounts, corporation tax on profits), the tax savings often outweigh these for higher-rate taxpayers.",
        ],
      },
      {
        heading: "SPV Companies Explained",
        paragraphs: [
          "An SPV is a limited company whose sole purpose is holding property investments. Lenders prefer SPVs because they have simple structures and clearly defined purposes. The company's articles of association should specify that its activities are limited to property investment and related activities.",
          "Setting up an SPV is straightforward through Companies House, typically costing under £50. However, you should seek advice from an accountant to ensure the structure is appropriate for your circumstances and to understand the ongoing accounting and tax filing requirements.",
        ],
      },
      {
        heading: "Lenders for Limited Company BTL",
        paragraphs: [
          "Not all buy to let lenders offer limited company products, but the market has grown significantly. Specialist lenders like Paragon, Kent Reliance, The Mortgage Lender, and others have developed strong limited company BTL propositions. Some high street lenders including NatWest and Barclays also offer limited company products.",
          "Rates for limited company BTL mortgages are typically 0.2-0.5% higher than equivalent personal BTL rates. Arrangement fees may also be higher. Despite this, the tax savings usually make limited company ownership worthwhile for higher-rate taxpayers with multiple properties.",
        ],
      },
      {
        heading: "Rates vs Personal BTL",
        paragraphs: [
          "While limited company BTL rates are higher than personal BTL rates, the overall financial picture often favours the company structure for higher-rate taxpayers. Corporation tax on profits (currently 25% for larger companies, 19% for smaller) is lower than higher-rate income tax (40-45%), and full mortgage interest relief remains available.",
          "The decision between personal and limited company ownership depends on your tax position, portfolio size, and long-term plans. Our brokers can help you compare the options and, alongside advice from your accountant, determine the most tax-efficient structure for your circumstances.",
        ],
      },
      {
        heading: "Get Expert Limited Company BTL Advice",
        paragraphs: [
          "Whether you're purchasing new investment property through a limited company or looking to remortgage existing company-owned BTL properties, our specialists can help. We work with lenders who understand SPV structures and can secure competitive rates for your portfolio. Complete our form for a free, no-obligation consultation.",
        ],
      },
    ],
    relatedDeals: ["buy-to-let", "interest-only", "remortgage"],
  },
];

export function getMortgageDealBySlug(slug: string): MortgageDeal | undefined {
  return mortgageDeals.find((deal) => deal.slug === slug);
}

export function getAllMortgageDealSlugs(): string[] {
  return mortgageDeals.map((deal) => deal.slug);
}
