import React, { useState } from 'react';
import { CheckCircle, Users, Mail, MessageCircle, Phone } from 'lucide-react';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    grade: '',
    major: '',
    email: '',
    phone: '',
    reason: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const requirements = [
    {
      icon: Users,
      title: '面向对象',
      description: '东南大学软件学院在读学生（包括本科生和研究生）',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: CheckCircle,
      title: '基本要求',
      description: '认可社区价值观，愿意分享经验，帮助他人成长',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Mail,
      title: '积极参与',
      description: '能够积极参与社区活动，分享有价值的经验和资源',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const steps = [
    {
      step: '01',
      title: '填写申请表',
      description: '完整填写申请表格，提供真实的基本信息',
      details: ['姓名、学号、年级、专业', '联系方式（邮箱、电话）', '申请加入的理由', '个人特长和兴趣']
    },
    {
      step: '02',
      title: '资料审核',
      description: '管理员审核申请资料，确认符合加入条件',
      details: ['核实学生身份', '评估申请理由', '确认参与意愿', '背景调查（如需要）']
    },
    {
      step: '03',
      title: '入群通知',
      description: '审核通过后，管理员会发送入群邀请',
      details: ['发送QQ群邀请链接', '提供微信群二维码', '发送欢迎邮件', '介绍社区规则']
    },
    {
      step: '04',
      title: '完善资料',
      description: '入群后完善个人资料，开始参与社区活动',
      details: ['在群内介绍自己', '完善个人档案', '参与首次活动', '开始分享经验']
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-h1 font-bold text-primary-900 mb-6">
            加入我们
          </h1>
          <p className="text-body-lg text-neutral-700 max-w-3xl mx-auto">
            成为711Club大家庭的一员，与优秀的同学们一起成长
          </p>
        </div>

        {/* Requirements */}
        <section className="mb-16">
          <h2 className="text-h2 font-bold text-primary-900 text-center mb-12">
            申请条件
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req, index) => {
              const IconComponent = req.icon;
              return (
                <div key={index} className="bg-background-surface p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-normal transform hover:-translate-y-1">
                  <div className={`w-12 h-12 ${req.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-h3 font-semibold text-primary-900 mb-3">
                    {req.title}
                  </h3>
                  <p className="text-body text-neutral-600">
                    {req.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-h2 font-bold text-primary-900 text-center mb-12">
            申请流程
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-neutral-200"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    {/* Step number */}
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-body">
                      {step.step}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-background-surface p-6 rounded-lg shadow-sm">
                      <h3 className="text-h3 font-semibold text-primary-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-body text-neutral-600 mb-4">
                        {step.description}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-small text-neutral-600">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold text-primary-900 text-center mb-12">
              申请表单
            </h2>
            
            {isSubmitted ? (
              <div className="bg-semantic-success/10 border border-semantic-success/20 rounded-lg p-8 text-center">
                <CheckCircle className="w-16 h-16 text-semantic-success mx-auto mb-4" />
                <h3 className="text-h2 font-semibold text-semantic-success mb-4">
                  申请提交成功！
                </h3>
                <p className="text-body text-neutral-600 mb-6">
                  感谢您的申请！我们会在3个工作日内审核您的申请资料，并通过邮件或QQ群通知您审核结果。
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                >
                  提交新的申请
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-background-surface rounded-lg shadow-sm p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-body font-medium text-neutral-700 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="请输入您的真实姓名"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-body font-medium text-neutral-700 mb-2">
                      学号 *
                    </label>
                    <input
                      type="text"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="请输入您的学号"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-body font-medium text-neutral-700 mb-2">
                      年级 *
                    </label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">请选择年级</option>
                      <option value="大一">大一</option>
                      <option value="大二">大二</option>
                      <option value="大三">大三</option>
                      <option value="大四">大四</option>
                      <option value="研一">研一</option>
                      <option value="研二">研二</option>
                      <option value="研三">研三</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-body font-medium text-neutral-700 mb-2">
                      专业 *
                    </label>
                    <select
                      name="major"
                      value={formData.major}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">请选择专业</option>
                      <option value="软件工程">软件工程</option>
                      <option value="计算机科学与技术">计算机科学与技术</option>
                      <option value="网络工程">网络工程</option>
                      <option value="信息安全">信息安全</option>
                      <option value="数据科学与大数据技术">数据科学与大数据技术</option>
                      <option value="人工智能">人工智能</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-body font-medium text-neutral-700 mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="请输入您的邮箱地址"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-body font-medium text-neutral-700 mb-2">
                      联系电话
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="请输入您的手机号码"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-body font-medium text-neutral-700 mb-2">
                    申请理由 *
                  </label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="请详细说明您希望加入711Club的理由，包括您能为社区贡献什么，以及您希望从社区获得什么..."
                  />
                </div>
                
                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    className="bg-accent-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-dark transition-all duration-fast transform hover:-translate-y-0.5 hover:shadow-lg shadow-accent-red/30"
                  >
                    提交申请
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-background-surface rounded-lg p-8">
          <h2 className="text-h2 font-bold text-primary-900 text-center mb-8">
            联系方式
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-h3 font-semibold text-primary-900 mb-2">
                QQ群
              </h3>
              <p className="text-body text-neutral-600 mb-2">123456789</p>
              <p className="text-small text-neutral-500">
                主要交流群，及时回复申请相关问题
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-h3 font-semibold text-primary-900 mb-2">
                邮箱
              </h3>
              <p className="text-body text-neutral-600 mb-2">contact@711club.edu.cn</p>
              <p className="text-small text-neutral-500">
                官方邮箱，用于正式申请和重要通知
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-h3 font-semibold text-primary-900 mb-2">
                管理员
              </h3>
              <p className="text-body text-neutral-600 mb-2">李四同学</p>
              <p className="text-small text-neutral-500">
                直接联系管理员获取帮助
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Join;