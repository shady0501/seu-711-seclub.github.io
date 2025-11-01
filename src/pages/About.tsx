import React, { useState, useEffect } from 'react';
import { Calendar, Target, Heart, Users } from 'lucide-react';
import useScrollToTop from '../hooks/useScrollToTop';
import MemberCard from '../components/MemberCard';

interface Member {
  name: string;
  avatar: string;
  homepage: string;
  bio?: string;
}

const About = () => {
  useScrollToTop(); // 页面加载时滚动到顶部
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMembers = async () => {
      try {
        const response = await fetch('/members.json');
        if (response.ok) {
          const data = await response.json();
          setMembers(data);
        }
      } catch (error) {
        console.error('加载成员数据失败:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, []);

  const timeline = [
    {
      year: '2025.10.28',
      title: '企划成立',
      description: '由东南大学软件学院22级部分同学发起，开始筹划建立711Club交流群。'
    },
    {
      year: '2025.11.1',
      title: '交流群正式启动',
      description: '711Club交流群正式建立，开始为软件学院同学提供生涯规划指导和经验分享平台。'
    },
    {
      year: '2025.11.2',
      title: '官网上线',
      description: '推出官方网站，为更多同学提供便捷的交流和学习平台。'
    }
  ];



  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-h1 font-bold text-primary-900 mb-6">
            关于711Club
          </h1>
          <p className="text-body-lg text-neutral-700 max-w-3xl mx-auto">
            一个温暖、专业、互助的软件学院交流社区
          </p>
        </div>

        {/* Community Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 font-bold text-primary-900 mb-6">
                社区理念
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="text-primary-500" size={16} />
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold text-primary-900 mb-2">
                      我们的愿景
                    </h3>
                    <p className="text-body text-neutral-600">
                      成为东南大学软件学院最具影响力的生涯交流平台，帮助每一位同学在学业和职业道路上获得成功。
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="text-accent-orange" size={16} />
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold text-primary-900 mb-2">
                      我们的使命
                    </h3>
                    <p className="text-body text-neutral-600">
                      通过分享经验、提供资源、组织活动，构建一个温暖互助的学习交流环境，让每位成员都能在这里成长和收获。
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-semantic-info/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-semantic-info" size={16} />
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold text-primary-900 mb-2">
                      我们的价值观
                    </h3>
                    <p className="text-body text-neutral-600">
                      开放包容、互帮互助、专业进取、持续成长。我们相信每个人的成功都值得被分享和传承。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background-surface p-8 rounded-lg shadow-sm">
              <img
                src="/711club-logo.jpg"
                alt="711Club Logo"
                className="w-48 h-48 mx-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Development Timeline */}
        <section className="mb-16">
          <h2 className="text-h2 font-bold text-center text-primary-900 mb-12">
            发展历程
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 transform md:-translate-x-0.5"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-background-surface transform md:-translate-x-2"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-background-surface p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-normal">
                      <div className="flex items-center mb-3">
                        <Calendar className="text-primary-500 mr-2" size={16} />
                        <span className="text-caption text-primary-600 font-semibold">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-h3 font-semibold text-primary-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-body text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Members */}
        <section className="mb-16">
          <h2 className="text-h2 font-bold text-center text-primary-900 mb-12">
            核心成员
          </h2>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
              <span className="ml-3 text-body text-neutral-600">加载成员信息中...</span>
            </div>
          ) : members.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <p className="text-body text-neutral-500">暂无核心成员信息</p>
            </div>
          )}
        </section>

        {/* Community Culture */}
        <section className="bg-background-surface rounded-lg p-8">
          <h2 className="text-h2 font-bold text-primary-900 mb-8 text-center">
            社区文化
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-h3 font-semibold text-primary-900 mb-4">
                社区规则
              </h3>
              <ul className="space-y-3 text-body text-neutral-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  尊重他人，保持友善的交流氛围
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  分享真实、有价值的经验和信息
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  保护个人隐私，不泄露他人信息
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  积极参与社区活动，贡献自己的力量
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-h3 font-semibold text-primary-900 mb-4">
                互助精神
              </h3>
              <p className="text-body text-neutral-600 mb-4">
                在711Club，我们相信"赠人玫瑰，手有余香"。每一位成员都是这个社区的建设者和受益者。
              </p>
              <ul className="space-y-3 text-body text-neutral-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  主动分享，不求回报
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  耐心解答，倾囊相授
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  互相鼓励，共同成长
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  传承精神，薪火相传
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;