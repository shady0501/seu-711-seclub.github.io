import React from 'react';
import { BookOpen, Briefcase, Trophy, GraduationCap, Code, Users } from 'lucide-react';
import useScrollToTop from '../hooks/useScrollToTop';

const Career = () => {
  useScrollToTop(); // 页面加载时滚动到顶部
  const careerPath = [
    {
      year: '大一',
      title: '基础建设期',
      description: '打牢专业基础，培养学习习惯',
      goals: ['掌握编程基础', '了解专业方向', '培养英语能力', '参与社团活动'],
      color: 'bg-blue-500'
    },
    {
      year: '大二',
      title: '技能提升期',
      description: '深入专业学习，参与项目实践',
      goals: ['学习核心课程', '参与项目开发', '参加竞赛活动', '寻找实习机会'],
      color: 'bg-green-500'
    },
    {
      year: '大三',
      title: '实战积累期',
      description: '积累项目经验，明确发展方向',
      goals: ['完成毕业设计', '获得实习经历', '准备考研/就业', '建立人脉网络'],
      color: 'bg-yellow-500'
    },
    {
      year: '大四',
      title: '收获实现期',
      description: '实现目标，开启新篇章',
      goals: ['完成学业任务', '获得理想offer', '准备研究生入学', '规划职业发展'],
      color: 'bg-purple-500'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: '学习资源',
      description: '优质课程、教材、在线学习平台推荐',
      items: [
        'MIT OpenCourseWare',
        'Coursera 专项课程',
        'LeetCode 算法练习',
        'GitHub 开源项目',
        '技术博客推荐'
      ],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Briefcase,
      title: '实习信息',
      description: '实习岗位信息、面试经验分享',
      items: [
        '大厂实习岗位',
        '创业公司机会',
        '实习面试题库',
        '实习经验分享',
        '内推信息'
      ],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Trophy,
      title: '竞赛指南',
      description: '各类竞赛信息、准备策略',
      items: [
        '数学建模竞赛',
        '程序设计竞赛',
        '创新创业大赛',
        '网络安全竞赛',
        'AI算法竞赛'
      ],
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: GraduationCap,
      title: '升学攻略',
      description: '保研、考研、留学全方位指导',
      items: [
        '保研夏令营',
        '考研复习计划',
        '留学申请指南',
        '导师选择建议',
        '面试准备技巧'
      ],
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const tools = [
    {
      category: '开发工具',
      items: [
        { name: 'Visual Studio Code', desc: '轻量级代码编辑器', url: '#' },
        { name: 'Git', desc: '版本控制系统', url: '#' },
        { name: 'Docker', desc: '容器化部署', url: '#' },
        { name: 'Postman', desc: 'API测试工具', url: '#' }
      ]
    },
    {
      category: '学习平台',
      items: [
        { name: 'LeetCode', desc: '算法练习平台', url: '#' },
        { name: 'GitHub', desc: '代码托管平台', url: '#' },
        { name: 'Stack Overflow', desc: '技术问答社区', url: '#' },
        { name: 'Medium', desc: '技术文章平台', url: '#' }
      ]
    },
    {
      category: '项目管理',
      items: [
        { name: 'Notion', desc: '笔记和项目管理', url: '#' },
        { name: 'Trello', desc: '看板式项目管理', url: '#' },
        { name: 'Figma', desc: 'UI/UX设计工具', url: '#' },
        { name: 'Jira', desc: '敏捷项目管理', url: '#' }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-h1 font-bold text-primary-900 mb-6">
            生涯规划
          </h1>
          <p className="text-body-lg text-neutral-700 max-w-3xl mx-auto">
            清晰的路径指导，全面的资源整合，助力你的职业发展
          </p>
        </div>

        {/* Career Path Timeline */}
        <section className="mb-16">
          <h2 className="text-h2 font-bold text-primary-900 text-center mb-12">
            发展路径图谱
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {careerPath.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-8 h-8 ${phase.color} rounded-full border-4 border-background-surface`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-background-surface p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-normal transform hover:-translate-y-1 mt-8 md:mt-0">
                    <div className="text-center mb-4">
                      <div className={`inline-block ${phase.color} text-white text-h3 font-bold px-4 py-2 rounded-lg mb-2`}>
                        {phase.year}
                      </div>
                      <h3 className="text-h3 font-semibold text-primary-900">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-body text-neutral-600 text-center mb-4">
                      {phase.description}
                    </p>
                    <ul className="space-y-2">
                      {phase.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="flex items-center text-small text-neutral-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="mb-16">
          <h2 className="text-h2 font-bold text-primary-900 text-center mb-12">
            资源分类
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div key={index} className="bg-background-surface p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-normal transform hover:-translate-y-1">
                  <div className={`w-12 h-12 ${resource.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-h3 font-semibold text-primary-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-body text-neutral-600 mb-4">
                    {resource.description}
                  </p>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-small text-neutral-600 hover:text-primary-600 cursor-pointer transition-colors">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tools Recommendation */}
        <section className="mb-16">
          <h2 className="text-h2 font-bold text-primary-900 text-center mb-12">
            工具推荐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((category, index) => (
              <div key={index} className="bg-background-surface rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Code className="text-primary-500 mr-3" size={24} />
                  <h3 className="text-h3 font-semibold text-primary-900">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.items.map((tool, toolIndex) => (
                    <div key={toolIndex} className="border-l-4 border-primary-200 pl-4">
                      <h4 className="text-body font-medium text-primary-900 mb-1">
                        {tool.name}
                      </h4>
                      <p className="text-small text-neutral-600">
                        {tool.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Guidance */}
        <section className="bg-background-surface rounded-lg p-8">
          <h2 className="text-h2 font-bold text-primary-900 text-center mb-8">
            职业发展建议
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-h3 font-semibold text-primary-900 mb-4">
                技术发展路径
              </h3>
              <ul className="space-y-3 text-body text-neutral-600">
                <li className="flex items-start">
                  <Users className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>明确技术方向，选择适合的编程语言和框架</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>参与开源项目，积累实际开发经验</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>持续学习新技术，保持技术敏感度</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>建立个人技术品牌，分享学习心得</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-h3 font-semibold text-primary-900 mb-4">
                软技能培养
              </h3>
              <ul className="space-y-3 text-body text-neutral-600">
                <li className="flex items-start">
                  <Users className="text-accent-orange mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>提升沟通能力，学会团队协作</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-accent-orange mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>培养问题解决能力，独立思考</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-accent-orange mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>学会时间管理，提高工作效率</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-accent-orange mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>建立人际网络，拓展职业机会</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;