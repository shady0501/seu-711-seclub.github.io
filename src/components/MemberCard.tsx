import React from 'react';
import { ExternalLink, User } from 'lucide-react';

interface Member {
  name: string;
  avatar: string;
  homepage: string;
  bio?: string;
}

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="group bg-background-surface rounded-lg shadow-sm hover:shadow-lg transition-all duration-normal transform hover:-translate-y-1 overflow-hidden">
      {/* 头像部分 */}
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center overflow-hidden">
          {member.avatar ? (
            <img
              src={member.avatar}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-background-surface shadow-lg"
              onError={(e) => {
                // 如果头像加载失败，显示默认图标
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-32 h-32 rounded-full bg-primary-200 flex items-center justify-center">
                      <svg class="w-16 h-16 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  `;
                }
              }}
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-primary-200 flex items-center justify-center">
              <User className="w-16 h-16 text-primary-500" />
            </div>
          )}
        </div>
        
        {/* 悬停时显示的链接按钮 */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-normal flex items-center justify-center">
          <a
            href={member.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 bg-white text-primary-600 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-normal shadow-lg hover:shadow-xl"
          >
            <span>查看主页</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      
      {/* 成员信息 */}
      <div className="p-6">
        <h3 className="text-h3 font-semibold text-primary-900 mb-2 text-center">
          {member.name}
        </h3>
        {member.bio && (
          <p className="text-body text-neutral-600 text-center">
            {member.bio}
          </p>
        )}
        
        {/* 底部链接 */}
        <div className="mt-4 pt-4 border-t border-neutral-200">
          <a
            href={member.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-primary-50 text-primary-600 hover:bg-primary-100 px-4 py-2 rounded-lg font-medium transition-colors duration-fast flex items-center justify-center space-x-2"
          >
            <span>访问个人主页</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;