'use client'

import { useState, useEffect, useRef } from 'react'

const VerticalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const containerRef = useRef(null)
  const scrollTimeoutRef = useRef(null)

  const slides = [
    {
      title: "100% Unique & Branded Themes",
      description: "We design every Shopify theme from the ground up—fully aligned with your brand identity, goals, and voice. Nothing pre-made, nothing generic."
    },
    {
      title: "No Cookie-Cutter Templates",
      description: "Forget the off-the-shelf look. Every element is custom-crafted to stand out and speak directly to your audience—no reused layouts or duplicated code."
    },
    {
      title: "Visual Storytelling Built In",
      description: "Each page is thoughtfully designed to guide users through your brand story, with intentional flow, engaging visuals, and meaningful content placement."
    },
    {
      title: "High-Fidelity Mockups First",
      description: "Before we code, we design in detail. You'll review pixel-perfect mockups that reflect the final product—ensuring clarity and alignment from the start."
    },
    {
      title: "Built for Scale & Speed",
      description: "Our themes aren't just beautiful—they're optimized for performance and future growth. From clean code to responsive layouts, every detail is scalable."
    }
  ]

  const handleWheel = (e) => {
    if (isScrolling) return

    e.preventDefault()
    setIsScrolling(true)

    if (e.deltaY > 0 && currentSlide < slides.length - 1) {
      // Scrolling down - next slide
      setCurrentSlide(prev => prev + 1)
    } else if (e.deltaY < 0 && currentSlide > 0) {
      // Scrolling up - previous slide
      setCurrentSlide(prev => prev - 1)
    }

    // Reset scrolling flag after animation
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false)
    }, 500)
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [currentSlide])

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title */}
          <div className="lg:pr-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Custom Design for Shopify
            </h2>
          </div>

          {/* Right Side - Vertical Carousel */}
          <div 
            ref={containerRef}
            className="relative h-[600px] flex items-center justify-center"
          >
            {slides.map((slide, index) => {
              const isActive = index === currentSlide
              const isPrevious = index < currentSlide
              const isNext = index > currentSlide
              
              let transform = ''
              let zIndex = 0
              let opacity = 0.3

              if (isActive) {
                transform = 'translateY(0) rotate(0deg)'
                zIndex = 50
                opacity = 1
              } else if (isPrevious) {
                // Previous slides go below and slightly to the left
                const offset = (currentSlide - index) * 20
                transform = `translateY(${offset}px) translateX(-${offset * 0.5}px) rotate(-${Math.min(offset * 0.5, 15)}deg)`
                zIndex = 40 - index
                opacity = Math.max(0.1, 1 - (currentSlide - index) * 0.2)
              } else if (isNext) {
                // Next slides go above and slightly to the right
                const offset = (index - currentSlide) * 20
                transform = `translateY(-${offset}px) translateX(${offset * 0.5}px) rotate(${Math.min(offset * 0.5, 15)}deg)`
                zIndex = 30 + index
                opacity = Math.max(0.1, 1 - (index - currentSlide) * 0.2)
              }

              return (
                <div
                  key={index}
                  className="absolute w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-lg p-8 transition-all duration-700 ease-out cursor-pointer hover:shadow-xl"
                  style={{
                    transform,
                    zIndex,
                    opacity
                  }}
                  onClick={() => setCurrentSlide(index)}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              )
            })}

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-blue-500 scale-125' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {currentSlide + 1} of {slides.length}
              </div>
            </div>

            {/* Scroll Instructions */}
            <div className="absolute top-4 right-4 bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span>↑</span>
                <span>Scroll to navigate</span>
                <span>↓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VerticalCarousel
