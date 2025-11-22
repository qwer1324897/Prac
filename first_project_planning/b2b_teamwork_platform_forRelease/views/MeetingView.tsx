import React from 'react';
import { RefreshCw, ArrowRight, Lock, Calendar, Video, Mic } from 'lucide-react';

const MeetingView: React.FC = () => {
  return (
    <div className="relative h-[calc(100vh-100px)] bg-slate-900 rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl">
       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 z-0"></div>
       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay z-0 animate-pulse"></div>

       <div className="absolute bottom-8 right-8 z-20">
             <button 
                onClick={() => alert('회의 목록이 갱신되었습니다.')}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm hover:bg-white/20 hover:border-white transition-all backdrop-blur-md shadow-lg"
             >
                 <RefreshCw size={14} /> 새로고침
             </button>
       </div>

       <div className="z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between px-12 gap-16">
           
           <div className="text-white lg:w-1/2">
                <div className="inline-block px-3 py-1 bg-indigo-500/30 border border-indigo-400/50 rounded-full text-indigo-200 text-xs font-bold mb-6">
                    기업용 화상회의 솔루션
                </div>
                <h1 className="text-5xl font-bold mb-6 leading-tight tracking-tight">
                    언제 어디서나<br/>
                    끊김 없는 협업
                </h1>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                    고화질 화상회의와 실시간 협업 도구를 통해<br/>팀의 생산성을 극대화하세요.
                </p>
                
                <div className="flex gap-4 mb-12">
                    <button onClick={() => alert('회의 예약 팝업이 뜹니다.')} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/50 flex items-center gap-2 transform hover:-translate-y-1">
                        <Calendar size={20} /> 회의 예약하기
                    </button>
                    <button onClick={() => alert('새 회의가 시작되었습니다.')} className="px-8 py-4 bg-white hover:bg-gray-100 text-slate-900 font-bold rounded-xl transition-all shadow-lg flex items-center gap-2 transform hover:-translate-y-1">
                        <Video size={20} /> 즉시 회의 시작
                    </button>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md max-w-md">
                    <p className="text-slate-300 text-sm mb-3 pl-1 font-medium">참여 코드로 입장</p>
                    <div className="relative">
                        <div className="absolute left-4 top-3.5 text-slate-400"><Lock size={18} /></div>
                        <input 
                            type="text" 
                            placeholder="회의 코드 입력 (예: 123-456)" 
                            className="w-full pl-11 pr-12 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                        <button className="absolute right-2 top-2 w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
           </div>

           <div className="bg-white rounded-2xl w-full max-w-md h-[600px] shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h3 className="font-bold text-lg text-slate-800">오늘의 회의</h3>
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">3건 예정</span>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                     <div onClick={() => alert('회의에 입장합니다.')} className="p-4 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group">
                         <div className="flex justify-between items-start mb-3">
                             <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold">10:00 - 11:00</div>
                             <Video size={16} className="text-gray-300 group-hover:text-blue-500" />
                         </div>
                         <h4 className="font-bold text-slate-800 mb-1 group-hover:text-blue-600">주간 업무 보고</h4>
                         <p className="text-xs text-slate-500">참여자: 김태호, 연승민 외 3명</p>
                         <div className="mt-3 pt-3 border-t border-gray-50 flex justify-end">
                             <span className="text-xs font-bold text-blue-600 group-hover:underline">참여하기 &gt;</span>
                         </div>
                     </div>

                     <div onClick={() => alert('회의에 입장합니다.')} className="p-4 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:border-purple-200 transition-all cursor-pointer group">
                         <div className="flex justify-between items-start mb-3">
                             <div className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs font-bold">14:00 - 15:30</div>
                             <Video size={16} className="text-gray-300 group-hover:text-purple-500" />
                         </div>
                         <h4 className="font-bold text-slate-800 mb-1 group-hover:text-purple-600">디자인 리뷰 미팅</h4>
                         <p className="text-xs text-slate-500">참여자: 디자인팀 전원</p>
                         <div className="mt-3 pt-3 border-t border-gray-50 flex justify-end">
                             <span className="text-xs font-bold text-purple-600 group-hover:underline">참여하기 &gt;</span>
                         </div>
                     </div>

                     <div onClick={() => alert('오디오 모드로 입장합니다.')} className="p-4 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:border-orange-200 transition-all cursor-pointer group">
                         <div className="flex justify-between items-start mb-3">
                             <div className="bg-orange-50 text-orange-700 px-2 py-1 rounded text-xs font-bold">16:00 - 17:00</div>
                             <Mic size={16} className="text-gray-300 group-hover:text-orange-500" />
                         </div>
                         <h4 className="font-bold text-slate-800 mb-1 group-hover:text-orange-600">타운홀 미팅 (Audio Only)</h4>
                         <p className="text-xs text-slate-500">참여자: 전사 임직원</p>
                         <div className="mt-3 pt-3 border-t border-gray-50 flex justify-end">
                             <span className="text-xs font-bold text-orange-600 group-hover:underline">청취하기 &gt;</span>
                         </div>
                     </div>
                </div>

                <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
                     <button className="text-sm font-medium text-slate-500 hover:text-slate-800">전체 일정 보기</button>
                </div>
           </div>
       </div>
    </div>
  );
};

export default MeetingView;