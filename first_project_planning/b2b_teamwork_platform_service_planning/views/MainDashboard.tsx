import React from 'react';
import { ArrowRight, Calendar as CalIcon, CheckSquare, Bell, MessageCircle, MoreHorizontal } from 'lucide-react';
import { ViewState } from '../types';

interface MainDashboardProps {
  user: string;
  onNavigate: (view: ViewState) => void;
}

const MainDashboard: React.FC<MainDashboardProps> = ({ user, onNavigate }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:bg-white/15 transition-colors duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:animate-shine pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-light mb-2 tracking-tight">
            반갑습니다, <span className="font-bold">{user}</span>님.
          </h2>
          <p className="text-blue-100 font-medium">훌륭한 1차 프로젝트가 되길 기원합니다.</p>
        </div>
        <div className="flex gap-3 relative z-10">
             <button onClick={() => onNavigate(ViewState.MAIL)} className="px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg text-sm font-medium transition-all border border-white/20 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                메일 쓰기
             </button>
             <button onClick={() => onNavigate(ViewState.CALENDAR)} className="px-5 py-2.5 bg-white text-blue-700 rounded-lg text-sm font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-50 transition-all hover:-translate-y-0.5 active:scale-95">
                일정 추가
             </button>
        </div>
      </div>

      <div className="relative group cursor-pointer" onClick={() => onNavigate(ViewState.AI)}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
        <div className="relative bg-white border border-gray-200 rounded-xl p-1 flex items-center shadow-sm group-hover:shadow-md transition-all">
             <div className="px-4 py-3 flex-1 flex items-center gap-3">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold rounded shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> AI 비서
                </span>
                <span className="text-slate-500 text-sm group-hover:text-slate-800 transition-colors">업무 관련 질문이나 데이터 분석을 요청해보세요...</span>
             </div>
             <button className="p-3 bg-gray-50 rounded-lg text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all transform group-hover:translate-x-1">
                <ArrowRight size={20} />
             </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-t-4 border-t-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-64 group" onClick={() => onNavigate(ViewState.CALENDAR)}>
            <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform"><CalIcon size={22} /></div>
                <MoreHorizontal size={20} className="text-gray-300 hover:text-gray-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">오늘 일정</h3>
            <div className="mt-auto space-y-3">
                 <div className="flex gap-3 items-center group/item p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex flex-col items-center justify-center w-11 h-11 bg-white rounded-lg border border-gray-200 group-hover/item:border-blue-300 transition-colors shadow-sm">
                        <span className="text-[10px] text-gray-500 uppercase">Nov</span>
                        <span className="text-sm font-bold text-slate-800">22</span>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-700 group-hover/item:text-blue-600 transition-colors">주간 업무 보고</p>
                        <p className="text-xs text-slate-500">10:00 - 11:30</p>
                    </div>
                 </div>
                 <div className="flex gap-3 items-center group/item p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex flex-col items-center justify-center w-11 h-11 bg-white rounded-lg border border-gray-200 group-hover/item:border-purple-300 transition-colors shadow-sm">
                        <span className="text-[10px] text-gray-500 uppercase">Nov</span>
                        <span className="text-sm font-bold text-slate-800">22</span>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-700 group-hover/item:text-purple-600 transition-colors">프로젝트 킥오프</p>
                        <p className="text-xs text-slate-500">14:00 - 15:00</p>
                    </div>
                 </div>
            </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-t-4 border-t-green-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-64 flex flex-col group" onClick={() => onNavigate(ViewState.TODO)}>
             <div className="flex justify-between items-start mb-6">
                <div className="p-2.5 bg-green-50 text-green-600 rounded-xl group-hover:scale-110 transition-transform"><CheckSquare size={22} /></div>
                <div className="flex items-baseline">
                   <span className="text-3xl font-bold text-slate-800">5</span>
                   <span className="text-xs text-slate-500 ml-1">건</span>
                </div>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">할 일 현황</h3>
            <div className="mt-auto">
                <div className="w-full bg-gray-100 rounded-full h-2.5 mb-4 overflow-hidden ring-1 ring-gray-200">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full w-2/3 shadow-[0_0_10px_rgba(34,197,94,0.4)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                    </div>
                </div>
                <div className="flex justify-between text-sm font-medium">
                    <span className="text-slate-600">진행중 <span className="text-green-600 font-bold ml-1 px-1.5 py-0.5 bg-green-50 rounded">3</span></span>
                    <span className="text-slate-400">대기 <span className="text-slate-600 font-bold ml-1 px-1.5 py-0.5 bg-gray-100 rounded">2</span></span>
                </div>
            </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-t-4 border-t-orange-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-64 flex flex-col group" onClick={() => onNavigate(ViewState.NOTICE)}>
             <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl group-hover:scale-110 transition-transform"><Bell size={22} /></div>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-4">공지사항</h3>
            <ul className="space-y-3 mt-auto">
                <li className="text-sm text-slate-600 truncate hover:text-blue-600 transition-colors flex items-center p-1.5 hover:bg-gray-50 rounded">
                    <span className="w-2 h-2 rounded-full bg-red-500 inline-block mr-2.5 shadow-sm"></span>
                    <span className="truncate font-medium">[필독] 4분기 보안 점검 안내</span>
                </li>
                <li className="text-sm text-slate-600 truncate hover:text-blue-600 transition-colors flex items-center p-1.5 hover:bg-gray-50 rounded">
                    <span className="w-2 h-2 rounded-full bg-slate-300 inline-block mr-2.5"></span>
                    <span className="truncate">연말정산 시스템 오픈 일정</span>
                </li>
                <li className="text-sm text-slate-600 truncate hover:text-blue-600 transition-colors flex items-center p-1.5 hover:bg-gray-50 rounded">
                    <span className="w-2 h-2 rounded-full bg-slate-300 inline-block mr-2.5"></span>
                    <span className="truncate">사내 카페테리아 메뉴 개편</span>
                </li>
            </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-t-4 border-t-purple-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-64 flex flex-col group" onClick={() => onNavigate(ViewState.QNA)}>
             <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl group-hover:scale-110 transition-transform"><MessageCircle size={22} /></div>
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg shadow-red-500/30 animate-pulse">NEW</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Q&A 업데이트</h3>
             <p className="text-sm text-slate-500 mb-auto">최근 등록된 답변이 있습니다.</p>
             <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:bg-purple-50 hover:border-purple-100 transition-colors group/item">
                 <p className="text-xs font-bold text-slate-700 mb-1 group-hover/item:text-purple-700 transition-colors">시스템 접속 오류 문의</p>
                 <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-blue-600 font-bold px-2 py-0.5 bg-blue-50 rounded">답변완료</p>
                    <p className="text-[10px] text-slate-400">김태호 담당자</p>
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default MainDashboard;