import React, { useState } from "react";
import { Link } from "react-router-dom";
import Backgroundimage from "../Components/Assets/background_image.jpeg";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly or yearly

  const plans = [
    {
      id: 1,
      name: "Starter",
      price: { monthly: 29, yearly: 290 },
      description: "Perfect for small businesses just getting started",
      features: [
        "Up to 500 leads/month",
        "Basic analytics",
        "Email support",
        "5 team members",
        "Basic reporting",
        "Mobile app access",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      id: 2,
      name: "Professional",
      price: { monthly: 79, yearly: 790 },
      description: "Ideal for growing teams looking to scale optimization",
      features: [
        "Up to 5,000 leads/month",
        "Advanced analytics",
        "Priority email & chat support",
        "15 team members",
        "Advanced reporting",
        "API access",
        "Custom integrations",
        "Automation workflows",
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: { monthly: 199, yearly: 1990 },
      description: "For large organizations demanding custom flexibility",
      features: [
        "Unlimited leads",
        "Custom analytics & AI insights",
        "24/7 phone & priority support",
        "Unlimited team members",
        "Custom reporting",
        "Dedicated account manager",
        "SLA guarantee",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  const calculateSavings = (monthly, yearly) => {
    const yearlyTotal = monthly * 12;
    const savings = yearlyTotal - yearly;
    return Math.round((savings / yearlyTotal) * 100);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image — Matched to Home page rules */}
      <img
        src={Backgroundimage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"
      />

      {/* Identical Ambient Lighting Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-gradient-to-b from-[#05070d]/40 via-[#05070d]/70 to-[#05070d]"
      />

      {/* Main Container Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Header Badge */}
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.6)]" />
          Flexible plans · Cancel anytime
        </span>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mb-14">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-none mb-6">
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              pricing models
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-xl mx-auto">
            Choose the perfect plan for your business needs. All packages start
            with our inclusive 14-day trial period.
          </p>

          {/* Premium Tech Toggle Element */}
          <div className="mt-10 inline-flex items-center gap-3 bg-white/[0.03] border border-white/5 p-1.5 rounded-full backdrop-blur-md">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                billingCycle === "monthly"
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full flex items-center gap-2 transition-all duration-200 ${
                billingCycle === "yearly"
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              Yearly saving
              <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] px-2 py-0.5 rounded-full font-medium">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Grid Systems */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 backdrop-blur-md ${
                plan.popular
                  ? "border-blue-500/40 bg-gradient-to-b from-blue-500/[0.08] to-transparent shadow-xl shadow-blue-500/5 md:-translate-y-2"
                  : "border-white/[0.06] bg-white/[0.02] hover:border-white/15"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-6">
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium border border-blue-400/20">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white/95 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-white/60 min-h-[40px] mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Mathematical Price Calculation blocks */}
                <div className="mb-6 pb-6 border-b border-white/[0.06]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                      $
                      {billingCycle === "monthly"
                        ? plan.price.monthly
                        : Math.round(plan.price.yearly / 12)}
                    </span>
                    <span className="text-white/40 text-sm">/mo</span>
                  </div>
                  {billingCycle === "yearly" ? (
                    <p className="text-xs text-blue-400/90 font-medium mt-2">
                      Billed annually at ${plan.price.yearly}/yr (Save{" "}
                      {calculateSavings(plan.price.monthly, plan.price.yearly)}
                      %)
                    </p>
                  ) : (
                    <p className="text-xs text-white/40 mt-2">
                      Flexible rolling cancellation
                    </p>
                  )}
                </div>

                {/* Features Checklist Container */}
                <div className="mb-8">
                  <p className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-4">
                    Includes feature capabilities:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2.5 text-white/75 text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Dynamic Action Buttons — Styled identical to Hero CTAs */}
              <Link
                to={plan.id === 3 ? "/contact" : "/signup"}
                className={`w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-white text-[#05070d] shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 hover:shadow-[0_15px_40px_-10px_rgba(255,255,255,0.4)]"
                    : "border border-white/15 bg-white/5 text-white/90 hover:bg-white/10"
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* Inline Seamless Mini FAQ Block */}
        <div className="mt-28 w-full max-w-4xl border-t border-white/[0.06] pt-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-base font-semibold text-white/90 mb-2">
                Can I switch plans later?
              </h4>
              <p className="text-sm text-white/60 leading-relaxed">
                Yes, update your workspace tier at any moment directly via your
                control dashboard. Your billing ledger updates dynamically.
              </p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-white/90 mb-2">
                Is there a setup overhead fee?
              </h4>
              <p className="text-sm text-white/60 leading-relaxed">
                No tracking fees or onboarding tariffs are added. You only pay
                the exact fixed subscription amount stated above.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Contextual Mini Footer CTA block */}
        <div className="mt-20 w-full max-w-4xl bg-gradient-to-r from-blue-500/[0.03] to-indigo-500/[0.03] border border-white/[0.05] p-8 md:p-10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">
              Require personalized specifications?
            </h3>
            <p className="text-sm text-white/60">
              We structure isolated system architecture arrangements for bespoke
              enterprise operational networks.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold rounded-xl text-white hover:bg-white/10 transition-colors"
          >
            Talk with Sales
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
