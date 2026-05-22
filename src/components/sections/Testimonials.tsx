'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'

const testimonials = [
  {
    author: 'Sarah Anderson',
    role: 'Senior Developer at TechCorp',
    content: 'DevHub has transformed how our team collaborates. The intuitive interface and powerful features make development a joy.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    author: 'Mike Johnson',
    role: 'Startup Founder',
    content: 'I\'ve tried many platforms, but DevHub stands out. From deployment to analytics, everything just works.',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    author: 'Emma Davis',
    role: 'DevOps Engineer',
    content: 'The automation capabilities and security features give me peace of mind. Highly recommended!',
    rating: 5,
    avatar: '👩‍🔬',
  },
]

export function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by Developers
          </h2>
          <p className="text-lg text-gray-600 dark:text-github-textMuted">
            See what developers from around the world are saying about DevHub.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card-hover"
              variants={itemVariants}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-github-text mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-gray-200 dark:border-github-border">
                <span className="text-2xl">{testimonial.avatar}</span>
                <div>
                  <p className="font-bold text-gray-900 dark:text-github-text">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-github-textMuted">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
