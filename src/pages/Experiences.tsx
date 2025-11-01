import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight, BookOpen } from 'lucide-react';
import { useContentIndex, getFilteredExperiences } from '../hooks/useContent';
import useScrollToTop from '../hooks/useScrollToTop';

const Experiences = () => {
  useScrollToTop(); // 页面加载时滚动到顶部
  const [activeCategory, setActiveCategory] = useState('全部');
  const { index, loading, error } = useContentIndex();

  const categories = ['全部', '保研', '就业', '留学', '实习', '考研', '技术栈', '通知'];

  const filteredExperiences = index?.experiences?.all 
    ? getFilteredExperiences(index.experiences.all, activeCategory)
    : [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-body text-neutral-600">加载中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-body text-error mb-4">加载内容时出错: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            重新加载
          </button>
        </div>
      </div>
    );
  }

  // 计算统计数据
  const categoryStats = index?.experiences?.categories || {};
  const stats = {
    '保研': categoryStats['保研']?.length || 0,
    '就业': categoryStats['就业']?.length || 0,
    '实习': categoryStats['实习']?.length || 0,
    '留学': categoryStats['留学']?.length || 0,
    '考研': categoryStats['考研']?.length || 0,
    '技术栈': categoryStats['技术栈']?.length || 0,
    '通知': categoryStats['announcements']?.length || 0,
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-h1 font-bold text-primary-900 mb-6">
            内容中心
          </h1>
          <p className="text-body-lg text-neutral-700 max-w-3xl mx-auto">
            经验分享、通知公告，一站式获取所有重要信息
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-fast ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-background-surface text-neutral-700 hover:bg-primary-50 hover:text-primary-600 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Cards */}
        {filteredExperiences.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((experience, index) => (
              <div
                key={index}
                className="group bg-background-surface rounded-lg shadow-sm hover:shadow-lg transition-all duration-normal transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-100 text-primary-600 text-caption px-3 py-1 rounded-full">
                      {experience.category}
                    </span>
                    <span className="text-caption text-neutral-500">
                      {experience.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-h3 font-semibold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {experience.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-body text-neutral-600 mb-4 line-clamp-3">
                    {experience.excerpt}
                  </p>

                  {/* Tags */}
                  {experience.tags && experience.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center bg-neutral-100 text-neutral-700 text-caption px-2 py-1 rounded"
                        >
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Meta */}
                  <div className="flex items-center justify-between text-caption text-neutral-500">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{experience.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{experience.date}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
                  <Link 
                    to={experience.category === 'announcements' 
                      ? `/content/experiences/announcements/${experience.file.split('/').pop()}`
                      : `/content/experiences/${experience.category}/${experience.file.split('/').pop()}`
                    }
                    className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    阅读全文
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-neutral-400" />
            </div>
            <p className="text-body text-neutral-500">
              {activeCategory === '全部' ? '暂无经验分享内容' : `暂无${activeCategory}类经验分享`}
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredExperiences.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors duration-fast">
              加载更多经验
            </button>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 bg-background-surface rounded-lg p-8">
          <h2 className="text-h2 font-bold text-primary-900 text-center mb-8">
            分享统计
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-500 mb-1">{stats['保研']}</div>
              <div className="text-small text-neutral-600">保研经验</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-orange mb-1">{stats['就业']}</div>
              <div className="text-small text-neutral-600">就业经验</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-semantic-info mb-1">{stats['实习']}</div>
              <div className="text-small text-neutral-600">实习经验</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-semantic-success mb-1">{stats['留学']}</div>
              <div className="text-small text-neutral-600">留学经验</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-semantic-warning mb-1">{stats['考研']}</div>
              <div className="text-small text-neutral-600">考研经验</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">{stats['技术栈']}</div>
              <div className="text-small text-neutral-600">技术分享</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-semantic-error mb-1">{stats['通知']}</div>
              <div className="text-small text-neutral-600">通知公告</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary-50 rounded-lg p-8">
            <h3 className="text-h2 font-bold text-primary-900 mb-4">
              分享你的经验
            </h3>
            <p className="text-body text-neutral-600 mb-6 max-w-2xl mx-auto">
              你的经验可能正是其他同学需要的宝贵资源。分享你的经历，帮助更多的学弟学妹成长。
            </p>
            <button 
              onClick={() => window.open('https://github.com/SEU-711-SEClub/seu-711-seclub.github.io', '_blank')}
              className="bg-accent-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors duration-fast"
            >
              提交经验分享
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;