import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Clock, User } from 'lucide-react';

const Community = () => {
  const [activeCategory, setActiveCategory] = useState('全部');

  const categories = ['全部', '学业讨论', '职业规划', '技术交流', '生活分享'];

  const discussions = [
    {
      id: 1,
      title: '关于算法竞赛的准备经验分享',
      author: '算法小能手',
      time: '2小时前',
      category: '技术交流',
      likes: 23,
      replies: 8,
      excerpt: '最近有很多学弟学妹问我如何准备算法竞赛，我想分享一下我的经验...',
      isHot: true
    },
    {
      id: 2,
      title: '大三实习选择：大厂vs创业公司',
      author: '职场新人',
      time: '5小时前',
      category: '职业规划',
      likes: 15,
      replies: 12,
      excerpt: '目前拿到了两个实习offer，一个是知名大厂，一个是很有潜力的创业公司...',
      isHot: false
    },
    {
      id: 3,
      title: '保研夏令营面试经验总结',
      author: '保研成功学姐',
      time: '1天前',
      category: '学业讨论',
      likes: 45,
      replies: 20,
      excerpt: '刚刚结束了几个学校的夏令营面试，整理了一些经验分享给大家...',
      isHot: true
    },
    {
      id: 4,
      title: 'React 18新特性学习心得',
      author: '前端小白',
      time: '2天前',
      category: '技术交流',
      likes: 8,
      replies: 5,
      excerpt: '最近在学习React 18的新特性，特别是并发渲染和Suspense...',
      isHot: false
    },
    {
      id: 5,
      title: '如何平衡学习和生活？',
      author: '时间管理大师',
      time: '3天前',
      category: '生活分享',
      likes: 31,
      replies: 15,
      excerpt: '很多同学问我如何平衡繁重的学习任务和丰富的大学生活...',
      isHot: false
    },
    {
      id: 6,
      title: '2024届毕业生就业去向统计',
      author: '就业统计员',
      time: '1周前',
      category: '职业规划',
      likes: 67,
      replies: 28,
      excerpt: '整理了我们这一届同学的就业情况，希望能给学弟学妹一些参考...',
      isHot: true
    }
  ];

  const filteredDiscussions = activeCategory === '全部' 
    ? discussions 
    : discussions.filter(d => d.category === activeCategory);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-h1 font-bold text-primary-900 mb-6">
            交流社区
          </h1>
          <p className="text-body-lg text-neutral-700 max-w-3xl mx-auto">
            与同学们分享经验、讨论问题、共同成长
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-fast ${
                  activeCategory === category
                    ? 'bg-accent-red text-white shadow-lg'
                    : 'bg-background-glass backdrop-blur-glass text-neutral-700 hover:bg-background-glass/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-background-glass backdrop-blur-glass border border-white/30 text-neutral-900 px-8 py-3 rounded-lg font-medium hover:bg-background-glass/60 transition-all duration-fast shadow-glass">
            发布话题
          </button>
          <button className="bg-background-glass backdrop-blur-glass border border-white/30 text-neutral-900 px-8 py-3 rounded-lg font-medium hover:bg-background-glass/60 transition-all duration-fast shadow-glass">
            搜索话题
          </button>
        </div>

        {/* Discussion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDiscussions.map((discussion) => (
            <div
              key={discussion.id}
              className="group bg-background-glass backdrop-blur-glass border border-white/30 rounded-xl p-6 hover:bg-background-glass/60 hover:shadow-glass-hover transition-all duration-normal transform hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <User className="text-white" size={16} />
                  </div>
                  <span className="text-small font-medium text-neutral-700">
                    {discussion.author}
                  </span>
                </div>
                {discussion.isHot && (
                  <span className="bg-accent-red text-white text-caption px-2 py-1 rounded-full">
                    热门
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="text-h3 font-semibold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors">
                {discussion.title}
              </h3>
              <p className="text-body text-neutral-600 mb-4 line-clamp-3">
                {discussion.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-caption text-neutral-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <ThumbsUp size={14} />
                    <span>{discussion.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle size={14} />
                    <span>{discussion.replies}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>{discussion.time}</span>
                </div>
              </div>

              {/* Category Tag */}
              <div className="mt-4 pt-4 border-t border-white/20">
                <span className="inline-block bg-white/20 text-neutral-700 text-caption px-3 py-1 rounded-full">
                  {discussion.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-background-glass backdrop-blur-glass border border-white/30 text-neutral-900 px-8 py-3 rounded-lg font-medium hover:bg-background-glass/60 transition-all duration-fast shadow-glass">
            加载更多话题
          </button>
        </div>

        {/* Community Stats */}
        <div className="mt-16 bg-background-glass backdrop-blur-glass border border-white/30 rounded-xl p-8">
          <h2 className="text-h2 font-bold text-primary-900 text-center mb-8">
            社区数据
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">1,234</div>
              <div className="text-body text-neutral-600">总话题数</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-orange mb-2">5,678</div>
              <div className="text-body text-neutral-600">总回复数</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-semantic-info mb-2">200+</div>
              <div className="text-body text-neutral-600">活跃用户</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-semantic-success mb-2">98%</div>
              <div className="text-body text-neutral-600">满意度</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;