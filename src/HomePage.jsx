import React, { useState } from 'react';
import DepartmentSelector from './components/DepartmentSelector';
import ClubList from './components/ClubList';
import CalendarSection from './components/CalendarSection';
import PosterGallery from './components/PosterGallery';

const departments = ['공연', '학술', '봉사', '종교', '전산', '체육', '전시'];

const clubsByDepartment = {
  공연: [
    { name: 'liquid', description: 'Liquid Dance Club', link: '/clubs/liquid' },
    { name: 'neo', description: 'NEO Band', link: '/clubs/neo' },
    { name: '즉새두', description: 'Improvisation Club', link: '/clubs/juksaedu' },
    { name: '미르', description: 'MIR Orchestra', link: '/clubs/mir' },
  ],
};

function HomePage() {
  const [selectedDept, setSelectedDept] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Handong Clubs</div>
        <button className="border px-4 py-2 rounded">로그인</button>
      </header>
      <nav className="bg-gray-50 p-4">
        <DepartmentSelector
          departments={departments}
          selected={selectedDept}
          onSelect={setSelectedDept}
        />
      </nav>
      <main className="flex-1 p-4 space-y-8">
        {!selectedDept && (
          <div className="flex justify-center mt-20">
            <button className="bg-blue-500 text-white px-6 py-3 rounded">가입 신청</button>
          </div>
        )}
        {selectedDept && (
          <ClubList clubs={clubsByDepartment[selectedDept] || []} />
        )}
        <CalendarSection />
        <PosterGallery />
      </main>
    </div>
  );
}

export default HomePage;
