import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/711club-logo.jpg"
                alt="711Club Logo"
                className="h-8 w-8 rounded"
              />
              <span className="text-xl font-bold text-white">711Club</span>
            </div>
            <p className="text-neutral-400 mb-4 max-w-md">
              东南大学软件学院生涯交流群，致力于为同学们提供温暖互助、专业成长、资源共享的交流平台。
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:liumengxuan@xuantianit.cn"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://github.com/SEU-711-SEClub/seu-711-seclub.github.io/"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/experiences"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  经验分享
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  生涯规划
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  活动中心
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  交流社区
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>QQ群：10252640589</li>
              <li>邮箱：liumengxuan@xuantianit.cn</li>
              <li>地址：东南大学九龙湖校区</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; 2025 711Club. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
