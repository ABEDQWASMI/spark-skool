'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { type Route } from 'next';
import { useLanguage } from '@/contexts/LanguageContext';

interface SparkLogoProps {
  className?: string;
}

const SparkLogo: React.FC<SparkLogoProps> = ({ className = '' }) => {
  return (
    <div className="flex items-center gap-2">
      <svg
        className={className}
        width="127"
        height="45"
        viewBox="0 0 127 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.53 19.06q.78 1.47.36 3.72h-.03q-1.05.18-2.25.24-1.2.03-2.25-.27.18-.81-.33-1.35a2.3 2.3 0 0 0-1.23-.69q-.72-.15-1.41.15-.66.3-.78 1.14-.06.21-.06.42.03.18.06.39.24.72.78.96t1.17.33q1.59.18 2.94 1.02a7.2 7.2 0 0 1 2.25 2.13q.54.69.81 1.5.27.78.3 1.62.06.84-.12 1.71-.15.84-.51 1.62-.36.93-.96 1.59t-1.38 1.08q-.75.42-1.65.63-.87.18-1.8.15-1.32-.03-2.64-.45a8.2 8.2 0 0 1-2.31-1.23 5.9 5.9 0 0 1-1.62-1.89Q.27 32.44.36 31v-.18q1.05-.15 2.31-.06 1.26.06 2.28.03.06.96.75 1.44.72.48 1.5.48.81-.03 1.38-.54.6-.51.42-1.56-.09-.72-.54-1.14-.45-.45-1.08-.72-.6-.27-1.32-.39-.72-.15-1.35-.27-.6-.12-1.11-.39t-.93-.63q-1.38-1.32-1.8-2.91-.39-1.59-.03-3.09t1.35-2.73a6.3 6.3 0 0 1 2.46-1.83q.72-.3 1.59-.39.87-.12 1.74-.06.9.03 1.74.24.87.21 1.59.54 1.44.75 2.22 2.22m6.07 22.77q0 .33-.03.93v.33q0 .03-.42.06-.39.06-.99.06-.57.03-1.23 0-.66 0-1.14-.09v-1.98q0-2.49-.06-4.98l-.12-4.89-.06-4.74q0-2.34.06-4.5.93 0 2.04-.03 1.11-.06 2.01.06.03.06.03.21v.48q.03.18.03.51.06.15.12.24.09.06.18-.12.45-.9 1.2-1.14.75-.27 1.59-.15 1.71.12 2.7.9.99.75 1.47 1.95.51 1.17.66 2.64t.21 2.97q0 1.05-.15 2.04-.12.99-.42 1.83-.27.81-.75 1.41-.45.57-1.11.81-.81.3-1.8.36-.96.09-1.83 0-.87-.06-1.47-.27t-.66-.48q.03 1.41.03 2.28v1.38q0 .54-.03.81 0 .3-.03.54 0 .27-.03.57m3.72-8.79q.75-.54.9-1.59.15-.42.18-.87t.03-.87q0-.75-.18-1.44a4 4 0 0 0-.54-1.26q-.36-.57-.87-.9t-1.14-.33q-.78 0-1.2.33t-.66.9q-.21.57-.27 1.38-.03.81-.03 1.74 0 1.17.03 1.86.06.66.24 1.02t.54.48q.39.09 1.02.09 1.23 0 1.95-.54m16.617-11.07q.75.03 1.71.09.03.18.03.36.03.18.03.36v.3q-.09 3.24.03 6.39.12 3.12-.09 6.33 0 .39-.03.78 0 .39-.36.45h-.36q-.48 0-.99-.03-.48-.06-.96-.06-.33 0-.66.06-.3.03-.63.03a.46.46 0 0 1-.3-.24 1.3 1.3 0 0 1-.06-.42q0-.33.06-.54t.06-.51q-.72.72-1.83 1.23-1.08.51-2.13.51-1.17 0-2.01-.81-.81-.81-1.35-2.01a11.7 11.7 0 0 1-.81-2.61q-.24-1.41-.24-2.61 0-1.5.39-2.76t1.05-2.16q.69-.93 1.62-1.44.93-.54 1.98-.57.54 0 .99.03.48 0 .87.15.39.12.69.42.3.27.51.78-.03-.48.03-.81.09-.36.09-.72 0-.03.18-.03.21-.03.45 0h.81q.51.03 1.23.06m-6.18 4.74q-.69.57-.84 1.32-.12.39-.15.81-.03.39-.03.78 0 1.35.69 2.31.72.93 1.98.93.75 0 1.11-.24.39-.27.54-.72.18-.48.18-1.14.03-.69.03-1.53 0-1.05-.03-1.65 0-.63-.15-.96a.63.63 0 0 0-.45-.42q-.3-.09-.93-.09-1.23 0-1.95.6m14.147-3.96q.03.09.03.3.12-.06.54-.24.45-.18.87-.33.57-.18 1.29-.27.72-.12 1.35-.15t1.05 0q.45 0 .45.03 0 1.02-.03 1.8v2.52q0 .51.03.96l-.27-.09q-.15-.06-.33-.09l-.3-.12q-.36-.09-.75-.15-.36-.06-.39-.06-.81-.09-1.5-.09-.66 0-1.17.21-.48.21-.75.66t-.24 1.29q.03 1.05.06 1.98t.03 1.89v1.92q.03.96.03 2.07v.12q-.51.15-.93.18t-.87 0q-.45 0-.99-.03-.51-.03-1.23.03 0-3.69-.09-7.38-.06-3.69.06-7.65.36.03.6.06h.9q.24-.03.6-.06.12 0 .42-.03l.66-.06q.36-.03.6 0 .27 0 .27.06zm10.205-7.59q.51 0 .9.06v6.57a39 39 0 0 1-.06 2.1q-.03 1.11.06 1.8.51-.45.87-.99.39-.54.72-1.08l.66-1.14q.36-.57.81-1.08.39.15 1.02.18h1.29l1.35-.06q.66-.06 1.08-.03-1.11 1.71-2.4 3.39-1.29 1.65-2.55 3.33 1.35 2.19 2.7 4.35 1.38 2.13 2.52 4.44-.42 0-1.08.03-.63.06-1.32.09t-1.35 0q-.63-.03-1.08-.12-.45-.72-.84-1.47-.36-.75-.72-1.47-.36-.75-.78-1.47-.39-.72-.9-1.38 0 .54.03 1.26t.03 1.5-.03 1.59q-.03.78-.15 1.44-.33-.03-.84 0-.48 0-1.02.03t-1.11.03q-.54 0-.99-.06-.21-5.58-.09-10.95t.09-10.83h.99q.57-.03 1.11-.03.57-.03 1.08-.03m22.247 3.9q.78 1.47.36 3.72h-.03q-1.05.18-2.25.24-1.2.03-2.25-.27.18-.81-.33-1.35a2.3 2.3 0 0 0-1.23-.69q-.72-.15-1.41.15-.66.3-.78 1.14-.06.21-.06.42.03.18.06.39.24.72.78.96t1.17.33q1.59.18 2.94 1.02a7.2 7.2 0 0 1 2.25 2.13q.54.69.81 1.5.27.78.3 1.62.06.84-.12 1.71-.15.84-.51 1.62-.36.93-.96 1.59t-1.38 1.08q-.75.42-1.65.63-.87.18-1.8.15-1.32-.03-2.64-.45a8.2 8.2 0 0 1-2.31-1.23 5.9 5.9 0 0 1-1.62-1.89q-.6-1.14-.51-2.58v-.18q1.05-.15 2.31-.06 1.26.06 2.28.03.06.96.75 1.44.72.48 1.5.48.81-.03 1.38-.54.6-.51.42-1.56-.09-.72-.54-1.14-.45-.45-1.08-.72-.6-.27-1.32-.39-.72-.15-1.35-.27-.6-.12-1.11-.39t-.93-.63q-1.38-1.32-1.8-2.91-.39-1.59-.03-3.09t1.35-2.73a6.3 6.3 0 0 1 2.46-1.83q.72-.3 1.59-.39.87-.12 1.74-.06.9.03 1.74.24.87.21 1.59.54 1.44.75 2.22 2.22m5.35-3.9q.51 0 .9.06v6.57a39 39 0 0 1-.06 2.1q-.03 1.11.06 1.8.51-.45.87-.99.39-.54.72-1.08l.66-1.14q.36-.57.81-1.08.39.15 1.02.18h1.29l1.35-.06q.66-.06 1.08-.03-1.11 1.71-2.4 3.39-1.29 1.65-2.55 3.33 1.35 2.19 2.7 4.35 1.38 2.13 2.52 4.44-.42 0-1.08.03-.63.06-1.32.09t-1.35 0q-.63-.03-1.08-.12-.45-.72-.84-1.47-.36-.75-.72-1.47-.36-.75-.78-1.47-.39-.72-.9-1.38 0 .54.03 1.26t.03 1.5-.03 1.59q-.03.78-.15 1.44-.33-.03-.84 0-.48 0-1.02.03t-1.11.03q-.54 0-.99-.06-.21-5.58-.09-10.95t.09-10.83h.99q.57-.03 1.11-.03.57-.03 1.08-.03m9.153 9.06q.18-.57.27-.9.21-.45.66-.78.48-.33 1.08-.54.63-.24 1.32-.33.72-.09 1.44-.09.6.06 1.14.03.57-.06 1.2 0 .96.06 1.83.39.87.3 1.5.9.42.27.66.87t.36 1.41q.12.78.15 1.74l.06 1.92q-.03.87-.09 1.98-.03 1.11-.15 2.13-.09 1.02-.27 1.83-.15.81-.45 1.11-.51.72-1.35 1.02-.81.3-1.77.36-.96.09-1.98 0-1.02-.06-1.86-.06-1.53-.27-2.58-1.32-.81-.72-1.11-1.8t-.36-2.25q-.06-1.2-.03-2.4.06-1.2-.03-2.19 0-.54.03-1.05.03-.54.12-1.11.03-.33.21-.87m5.04 1.98q-.63.18-1.02.66-.18.12-.27.6-.12.96-.12 1.92 0 .93-.06 1.98-.03.69.36 1.08.39.36.93.51.57.12 1.17.06.6-.09.99-.3.51-.24.69-.99.12-.96.18-1.92.09-.99-.09-1.86-.15-1.05-.87-1.53t-1.89-.21m8.408-1.98q.18-.57.27-.9.21-.45.66-.78.48-.33 1.08-.54.63-.24 1.32-.33.72-.09 1.44-.09.6.06 1.14.03.57-.06 1.2 0 .96.06 1.83.39.87.3 1.5.9.42.27.66.87t.36 1.41q.12.78.15 1.74l.06 1.92q-.03.87-.09 1.98-.03 1.11-.15 2.13-.09 1.02-.27 1.83-.15.81-.45 1.11-.51.72-1.35 1.02-.81.3-1.77.36-.96.09-1.98 0a32 32 0 0 0-1.86-.06q-1.53-.27-2.58-1.32-.81-.72-1.11-1.8t-.36-2.25q-.06-1.2-.03-2.4.06-1.2-.03-2.19 0-.54.03-1.05.03-.54.12-1.11.03-.33.21-.87m5.04 1.98q-.63.18-1.02.66-.18.12-.27.6-.12.96-.12 1.92 0 .93-.06 1.98-.03.69.36 1.08.39.36.93.51.57.12 1.17.06.6-.09.99-.3.51-.24.69-.99.12-.96.18-1.92.09-.99-.09-1.86-.15-1.05-.87-1.53t-1.89-.21m8.227-5.55q0-2.73.27-5.46l4.08.09q0 1.23-.03 2.97t-.06 3.72l-.06 4.11v4.11q0 1.98.03 3.72.03 1.71.09 2.91-.15.18-.75.18-.6.03-1.32 0-.69 0-1.32-.03t-.84.03q.21-2.7.15-5.43-.03-2.73-.12-5.46t-.12-5.46M4.09 2.112c-.009-.11-.2-.155-.258-.061-.172.282-.42.623-.697.792s-.693.237-1.023.262c-.11.009-.155.2-.061.258.282.172.623.42.792.697s.237.692.262 1.022c.009.11.2.156.258.062.172-.282.42-.623.697-.793s.692-.236 1.022-.261c.11-.009.156-.2.062-.258-.282-.172-.623-.42-.793-.697s-.236-.693-.261-1.023M15.873.11c.004-.11.186-.153.24-.057.253.45.686 1.11 1.176 1.412.49.3 1.276.386 1.791.408.11.004.154.186.058.24-.45.253-1.111.686-1.412 1.176s-.386 1.276-.408 1.791c-.004.11-.186.154-.24.058-.254-.45-.686-1.111-1.176-1.412s-1.276-.386-1.791-.408c-.11-.004-.154-.186-.058-.24.45-.254 1.11-.686 1.412-1.176.3-.49.386-1.276.408-1.791M11.49 3.7l-.225-.337c-.867-1.306-1.301-1.959-1.85-1.895-.55.063-.85.8-1.451 2.275l-.156.382c-.171.42-.256.629-.407.778s-.348.22-.744.364l-.36.13-.254.093c-1.225.446-1.844.702-1.952 1.26-.114.596.43 1.14 1.517 2.227l.28.282c.31.309.464.463.547.667.082.204.083.434.085.893l.001.419c.006 1.617.01 2.426.488 2.73.478.306 1.115-.096 2.388-.899l.33-.207c.361-.228.542-.342.743-.366s.4.048.797.188l.362.128c1.397.495 2.096.743 2.506.336s.26-1.2-.04-2.783l-.078-.41c-.085-.45-.128-.675-.086-.893s.164-.404.408-.777l.221-.34c.858-1.311 1.287-1.967 1.062-2.524s-.954-.644-2.413-.82l-.377-.045c-.415-.05-.622-.076-.798-.187-.175-.112-.298-.297-.545-.668m-6.393 9.576c-2.194.993-4.065 2.651-4.848 4.712-.482-5.035.735-8.204 2.514-10.119.127.32.3.59.457.801.327.44.804.917 1.289 1.402l.348.348.162.163.001.252.002.516c.003.697.005 1.378.075 1.925" fill="#3AB7FF"/>
      </svg>
      {!className.includes("w-8") && (
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Beta</span>
        </div>
      )}
    </div>
  );
};

interface TeacherSidebarProps {
  teacher?: {
    name: string;
    subject: string;
    avatar?: string;
  };
}

export default function TeacherSidebar({ teacher: propTeacher }: TeacherSidebarProps) {
  const { t } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [teacher, setTeacher] = useState(propTeacher);

  // Load teacher data from localStorage
  useEffect(() => {
    try {
      const userData = localStorage.getItem('currentUser');
      if (userData) {
        const user = JSON.parse(userData);
        setTeacher({
          name: user.name || 'Teacher',
          subject: user.subject || 'Subject',
          avatar: user.avatar
        });
      }
    } catch (error) {
      console.error('Failed to load teacher data:', error);
    }
  }, []);

  const menuItems = [
    {
      id: 'dashboard',
      title: t('dashboard'),
      href: '/dashboard/teacher',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      id: 'chat',
      title: t('chat'),
      href: '/dashboard/teacher/chat',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    { 
      id: 'lessons', 
      title: t('lessons'), 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      href: '/dashboard/teacher/lessons' as Route 
    },
    { 
      id: 'materials',
      title: t('materials'),
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      href: '/dashboard/teacher/materials' as Route 
    },
    { 
      id: 'students',
      title: t('students'),
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      href: '/dashboard/teacher/students' as Route 
    },
    {
      id: 'tools',
      title: t('tools'),
      href: '/dashboard/teacher/tools',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      )
    },
    {
      id: 'settings',
      title: t('settings'),
      href: '/dashboard/teacher/settings',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className={`${isCollapsed ? 'w-[70px]' : 'w-[280px]'} bg-[#0a0a0a] flex flex-col h-full transition-all duration-300`}>
      <div className="flex items-center justify-between p-4 mb-4">
        <Link href="/" className="flex items-center gap-2">
          <SparkLogo className={isCollapsed ? "w-8 h-8" : "w-32 h-12"} />
          {!isCollapsed && (
            <span className="sr-only">Spark Skool</span>
          )}
        </Link>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg 
            className="w-5 h-5 transition-transform duration-200" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path 
              d="M15 6L9 12L15 18" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <nav className="px-2 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.href as Route}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === item.id 
                ? 'bg-white/10 text-white shadow-inner' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span className={`${activeTab === item.id ? 'text-white' : 'text-gray-400'}`}>
              {item.icon}
            </span>
            {!isCollapsed && (
              <span className="font-medium">{item.title}</span>
            )}
          </Link>
        ))}
      </nav>

      <div className="mt-auto">
        {isCollapsed ? (
          <div className="p-2 bg-[#1a1a1a] rounded-xl flex justify-center mx-2 mb-2">
            <Image
              src={teacher?.avatar || "/avatars/default-teacher.jpg"}
              alt={teacher?.name || "Teacher"}
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        ) : (
          <div className="p-4 bg-[#1a1a1a] rounded-xl mx-2 mb-2">
            <div className="flex items-center gap-3">
              <Image
                src={teacher?.avatar || "/avatars/default-teacher.jpg"}
                alt={teacher?.name || "Teacher"}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="text-white font-medium truncate">
                  {teacher?.name}
                </div>
                <div className="text-gray-400 text-sm truncate">
                  {teacher?.subject} Teacher
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 