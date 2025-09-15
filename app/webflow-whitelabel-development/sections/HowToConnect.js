import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 24C12 24 8 20 8 16C8 12 12 8 16 8C20 8 24 12 24 16"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 24C36 24 40 20 40 16C40 12 36 8 32 8C28 8 24 12 24 16"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M20 36L24 40L28 36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="10" r="1" fill="white" />
        <circle cx="30" cy="10" r="1" fill="white" />
        <circle cx="35" cy="15" r="1" fill="white" />
        <circle cx="13" cy="15" r="1" fill="white" />
      </svg>
    ),
    bgColor: "bg-orange-500",
    title: "Schedule a Discovery Call",
    description:
      "Tell us about your project, client needs, and expectations. We'll share how we can integrate into your workflow.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="4" stroke="white" strokeWidth="2" />
        <circle cx="16" cy="28" r="4" stroke="white" strokeWidth="2" />
        <circle cx="32" cy="28" r="4" stroke="white" strokeWidth="2" />
        <path d="M24 20V24H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 24H28" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 32L24 38L30 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 24C20 24 22 26 24 26C26 26 28 24 28 24" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    bgColor: "bg-green-500",
    title: "Share Your Brief",
    description:
      "Provide your designs, scope, and deadlines. We begin the build immediately with quality assurance baked into every step.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="20" r="6" stroke="white" strokeWidth="2" />
        <circle cx="30" cy="20" r="6" stroke="white" strokeWidth="2" />
        <path d="M12 32C12 28 15 26 18 26C21 26 24 28 24 32" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 32C24 28 27 26 30 26C33 26 36 28 36 32" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 16C14 16 16 14 18 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 16C22 16 20 14 18 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 16C26 16 28 14 30 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 16C34 16 32 14 30 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    bgColor: "bg-blue-500",
    title: "Deliver With Confidence",
    description:
      "We work silently in the background while you present a polished product to your client. On time and on brand",
  },
]

export default function HowToConnect() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How to Connect</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-24 h-24 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium"
          >
            Get started in 3 simple steps
          </Button>
        </div>
      </div>
    </section>
  )
}
