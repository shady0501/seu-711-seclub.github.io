import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';

const Member = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    studentId: '',
    grade: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a demo page, no actual authentication
    alert('这是演示页面，实际功能待开发');
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      studentId: '',
      grade: ''
    });
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <img
            src="/711club-logo.jpg"
            alt="711Club Logo"
            className="h-16 w-16 mx-auto rounded-lg shadow-md mb-4"
          />
          <h1 className="text-h1 font-bold text-primary-900 mb-2">
            711Club
          </h1>
          <p className="text-body text-neutral-600">
            {isLogin ? '登录到您的账户' : '创建新账户'}
          </p>
        </div>

        {/* Auth Form */}
        <div className="bg-background-surface rounded-lg shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-body font-medium text-neutral-700 mb-2">
                用户名 *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="请输入用户名"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-body font-medium text-neutral-700 mb-2">
                密码 *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-12 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="请输入密码"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-neutral-400 hover:text-neutral-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-neutral-400 hover:text-neutral-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Registration Additional Fields */}
            {!isLogin && (
              <>
                {/* Confirm Password */}
                <div>
                  <label className="block text-body font-medium text-neutral-700 mb-2">
                    确认密码 *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="请再次输入密码"
                    />
                  </div>
                </div>

                {/* Email */}
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
                    placeholder="请输入邮箱地址"
                  />
                </div>

                {/* Student ID */}
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
                    placeholder="请输入学号"
                  />
                </div>

                {/* Grade */}
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
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-accent-red text-white py-3 rounded-lg font-semibold hover:bg-accent-dark transition-all duration-fast transform hover:-translate-y-0.5 hover:shadow-lg shadow-accent-red/30 flex items-center justify-center"
            >
              {isLogin ? (
                <>
                  <LogIn className="w-5 h-5 mr-2" />
                  登录
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5 mr-2" />
                  注册
                </>
              )}
            </button>
          </form>

          {/* Toggle Mode */}
          <div className="mt-6 text-center">
            <p className="text-body text-neutral-600">
              {isLogin ? '还没有账号？' : '已有账号？'}
              <button
                onClick={toggleMode}
                className="ml-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                {isLogin ? '立即注册' : '立即登录'}
              </button>
            </p>
          </div>

          {/* Forgot Password */}
          {isLogin && (
            <div className="mt-4 text-center">
              <button className="text-small text-neutral-500 hover:text-primary-600 transition-colors">
                忘记密码？
              </button>
            </div>
          )}
        </div>

        {/* Features Preview */}
        <div className="mt-8 bg-background-surface rounded-lg p-6">
          <h3 className="text-h3 font-semibold text-primary-900 text-center mb-4">
            成员专享功能
          </h3>
          <ul className="space-y-3 text-body text-neutral-600">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
              访问独家资源库
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
              参与内部技术讨论
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
              获得内推和实习机会
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
              下载历年真题和资料
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
              一对一学长学姐指导
            </li>
          </ul>
        </div>

        {/* Demo Notice */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-small text-yellow-800 text-center">
            <strong>演示页面：</strong>这是成员专区的演示版本，实际登录注册功能待开发。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Member;