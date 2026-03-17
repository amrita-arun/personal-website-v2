'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Users, Code, CheckCircle, Zap, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function SupaclassPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              Supaclass Case Study
            </div>
            
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
              SWE and Growth Intern
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Building the infrastructure and outreach that powers AI-driven grading
            </p>
            
            <div className="flex items-center justify-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Jan 2025 → Present</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>AI Grading Startup</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Over the past year, I've worked at Supaclass — an AI grading startup — to build distributed 
              code-execution systems and drive real-world adoption in classrooms. I balanced engineering 
              ownership with user-facing growth initiatives, from designing AWS pipelines to leading 
              product demos for teachers across California.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Growth Work Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Growth Work</h2>
            <p className="text-lg text-gray-600">Driving adoption through strategic outreach and education</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Teacher Outreach & Demos */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Teacher Outreach & Demos</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Scheduled 1-on-1 demos with teachers from UCLA, UCI, and several high schools, 
                translating product feedback into product improvements. Conducted over 50 sessions 
                to refine user onboarding.
              </p>
              
              {/* Placeholder for email screenshots */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-200">
                <p className="text-gray-500 text-sm text-center">
                  📧 Email screenshots of demo scheduling will be added here
                </p>
              </div>
            </motion.div>

            {/* AI in Education Slide Deck */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">AI in Education Slide Deck</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Developed a visual presentation to communicate Supaclass's vision to educators 
                and partners, highlighting the transformative potential of AI in educational assessment.
              </p>
              
              {/* Placeholder for slide deck */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-200">
                <p className="text-gray-500 text-sm text-center">
                  📊 Slide deck embed will be added here
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering Work Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Engineering Work</h2>
            <p className="text-lg text-gray-600">Building scalable infrastructure for code execution</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Code Execution Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Code Execution Infrastructure</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Architected and implemented a Dockerized in-browser terminal using Nest.js backend 
                with AWS ECS/Fargate, ECR, and S3 for distributed system-level sandboxing.
              </p>
              
              {/* Architecture Diagram Placeholder */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="text-center text-gray-500 text-sm">
                  <div className="mb-2">🏗️ Architecture Diagram</div>
                  <div className="text-xs space-y-1">
                    <div>Student Submission → S3 → ECS Container</div>
                    <div>↓</div>
                    <div>Code Eval → Logs → Dashboard</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature QA and Testing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Feature QA and Testing</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Owned quality-assurance efforts, maintaining QA documentation, testing new API endpoints, 
                and ensuring stable rollouts before classroom pilots.
              </p>
              
              {/* Placeholder for QA screenshot */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-200">
                <p className="text-gray-500 text-sm text-center">
                  📋 QA Notion doc screenshot will be added here
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact</h2>
            <p className="text-lg text-gray-600">Measurable results from technical and growth initiatives</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600">Teachers onboarded across K-12 and higher ed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-pink-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">5</div>
              <div className="text-sm text-gray-600">AWS services integrated (ECR, ECS, S3, Lambda, CloudWatch)</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-pink-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">30%</div>
              <div className="text-sm text-gray-600">Faster execution time after optimization</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-pink-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-sm text-gray-600">Bugs tracked and verified pre-release</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Reflection</h2>
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-8 border border-pink-200">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Working at Supaclass taught me that scaling an idea in education takes as much empathy 
                as engineering. The most meaningful part of this role was hearing teachers' excitement 
                during demos — a reminder that great tools amplify human connection, not replace it."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}
