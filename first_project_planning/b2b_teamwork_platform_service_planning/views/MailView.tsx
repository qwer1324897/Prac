import React, { useState, useMemo } from 'react';
import { Search, Star, Paperclip, Inbox, Send, File, AlertCircle, Trash2, Mail, Plus, Filter, MoreVertical, RefreshCw } from 'lucide-react';
import { MailItem } from '../types';

const mockMails: MailItem[] = [
  { id: 1, sender: '김태호', senderEmail: 'th.kim@b2b.com', title: '4분기 프로젝트 회고 일정 조율', preview: '안녕하세요, 4분기 프로젝트 마무리를 위한 회고...', content: '안녕하세요, 4분기 프로젝트 마무리를 위한 회고 미팅 일정을 잡고자 합니다. 가능한 시간을 공유해주시면 감사하겠습니다.', date: '11:30', isRead: false, tag: '업무', isImportant: true },
  { id: 2, sender: '연승민', senderEmail: 'sm.yeon@b2b.com', title: '[요청] 디자인 리소스 전달', preview: '지난주 논의했던 메인 페이지 시안 리소스입니다...', content: '지난주 논의했던 메인 페이지 시안 리소스를 첨부하여 전달드립니다. 확인 후 피드백 부탁드립니다.', date: '10:15', isRead: false, hasAttachment: true, isMentioned: true },
  { id: 3, sender: '강동훈', senderEmail: 'dh.kang@b2b.com', title: '서버 점검 관련 공지사항 공유', preview: '이번 주말 예정된 정기 서버 점검 일정입니다...', content: '이번 주말 예정된 정기 서버 점검 일정 공유드립니다. 서비스 중단 예상 시간은 일요일 새벽 2시부터 4시까지입니다.', date: '09:00', isRead: true, tag: '공지' },
  { id: 4, sender: '남여원', senderEmail: 'yw.nam@b2b.com', title: '마케팅 예산안 승인 요청', preview: '2025년 1분기 마케팅 예산안 결재 부탁드립니다.', content: '안녕하세요 팀장님, 2025년 1분기 마케팅 집행 예산안을 작성하여 송부드립니다. 검토 부탁드립니다.', date: '어제', isRead: true, isVip: true },
  { id: 5, sender: '인사팀', senderEmail: 'hr@b2b.com', title: '연말정산 안내', preview: '2024년 귀속 연말정산 일정을 안내드립니다.', content: '2024년 귀속 연말정산 시스템 오픈 일정을 안내드립니다. 1월 15일부터 접속 가능합니다.', date: '어제', isRead: true, tag: '전사' },
  { id: 6, sender: '보안팀', senderEmail: 'sec@b2b.com', title: '월간 보안 뉴스레터 11월호', preview: '최근 보안 이슈 및 대응 방안을 공유합니다.', content: '랜섬웨어 예방 수칙 및 최신 보안 동향을 담은 11월호 뉴스레터입니다.', date: '11-20', isRead: true },
  { id: 7, sender: '김태호', senderEmail: 'th.kim@b2b.com', title: '회의록 공유: 신규 기능 기획', preview: '금일 진행된 신규 기능 기획 회의록입니다.', content: '회의 참석해 주셔서 감사합니다. 결정된 사항 정리하여 공유합니다.', date: '11-19', isRead: true, hasAttachment: true },
  { id: 8, sender: 'External Partner', senderEmail: 'partner@corp.com', title: '제휴 제안서 수정본', preview: '요청하신 내용을 반영한 수정 제안서입니다.', content: '피드백 주신 내용을 바탕으로 수정된 제안서 송부드립니다.', date: '11-18', isRead: true, isImportant: true },
  { id: 9, sender: '시스템관리자', senderEmail: 'admin@b2b.com', title: '비밀번호 변경 알림', preview: '비밀번호 변경 주기가 도래했습니다.', content: '보안 정책에 따라 3개월마다 비밀번호를 변경해야 합니다.', date: '11-15', isRead: true },
  { id: 10, sender: '남여원', senderEmail: 'yw.nam@b2b.com', title: '회식 장소 투표', preview: '이번 달 팀 회식 장소 투표 부탁드립니다.', content: '안녕하세요, 이번 달 팀 회식 장소 선정을 위해 투표 링크를 공유합니다.', date: '11-14', isRead: true },
  { id: 11, sender: '강동훈', senderEmail: 'dh.kang@b2b.com', title: 'API 문서 업데이트 내역', preview: 'v2.1 API 변경 사항을 확인해주세요.', content: '인증 관련 API가 일부 변경되었습니다. 개발팀은 필히 확인 부탁드립니다.', date: '11-13', isRead: true, tag: '개발' },
  { id: 12, sender: '경영지원팀', senderEmail: 'support@b2b.com', title: '사내 동호회 모집 안내', preview: '2025년 신규 사내 동호회를 모집합니다.', content: '활기찬 조직 문화를 위한 사내 동호회 신설 및 가입 기간입니다.', date: '11-10', isRead: true },
];

const MailView: React.FC = () => {
  const [filterType, setFilterType] = useState<string | null>(null);
  const [selectedMail, setSelectedMail] = useState<MailItem | null>(null);
  
  const filteredMails = useMemo(() => {
    if (!filterType) return mockMails;
    switch(filterType) {
        case 'attachment': return mockMails.filter(m => m.hasAttachment);
        case 'vip': return mockMails.filter(m => m.isVip);
        case 'important': return mockMails.filter(m => m.isImportant);
        case 'mention': return mockMails.filter(m => m.isMentioned);
        case 'unread': return mockMails.filter(m => !m.isRead);
        default: return mockMails;
    }
  }, [filterType]);

  const stats = useMemo(() => ({
      attachment: mockMails.filter(m => m.hasAttachment).length,
      vip: mockMails.filter(m => m.isVip).length,
      important: mockMails.filter(m => m.isImportant).length,
      mention: mockMails.filter(m => m.isMentioned).length,
      unread: mockMails.filter(m => !m.isRead).length
  }), []);

  return (
    <div className="flex h-[calc(100vh-140px)] bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
      
      <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
        <div className="p-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2">
            <Plus size={18} /> 메일 쓰기
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto px-2 space-y-1">
          <button onClick={() => { setFilterType(null); setSelectedMail(null); }} className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${!filterType ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:bg-gray-200'}`}>
            <div className="flex items-center gap-3"><Inbox size={18} /> 받은 메일함</div>
            {stats.unread > 0 && <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{stats.unread}</span>}
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-gray-200">
             <Send size={18} /> 보낸 메일함
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-gray-200">
             <File size={18} /> 임시 보관함
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-gray-200">
             <AlertCircle size={18} /> 스팸 메일함
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-gray-200">
             <Trash2 size={18} /> 휴지통
          </button>

          <div className="pt-6 pb-2 px-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Quick Filters</div>
          <button onClick={() => setFilterType('unread')} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${filterType==='unread' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:bg-gray-200'}`}>
             <Mail size={16} /> 안읽음
          </button>
          <button onClick={() => setFilterType('attachment')} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${filterType==='attachment' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:bg-gray-200'}`}>
             <Paperclip size={16} /> 첨부파일
          </button>
          <button onClick={() => setFilterType('vip')} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${filterType==='vip' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:bg-gray-200'}`}>
             <Star size={16} /> VIP
          </button>
        </nav>
      </div>

      <div className={`flex-1 flex flex-col min-w-0 border-r border-gray-200 bg-white transition-all duration-300 ${selectedMail ? 'w-[400px] hidden xl:flex xl:flex-none' : 'w-full'}`}>
         <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white shrink-0">
             <div className="flex items-center gap-4">
                 <h2 className="font-bold text-lg text-slate-800">
                    {filterType === 'vip' ? 'VIP 메일함' : 
                     filterType === 'attachment' ? '첨부파일 메일함' :
                     filterType === 'important' ? '중요 메일함' :
                     filterType === 'mention' ? '멘션된 메일' : '받은 메일함'}
                 </h2>
                 <span className="text-slate-400 text-sm">{filteredMails.length}개</span>
             </div>
             <div className="flex items-center gap-2">
                 <div className="relative">
                     <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                     <input type="text" placeholder="메일 검색" className="pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 w-48 border-none" />
                 </div>
                 <button className="p-2 text-slate-500 hover:bg-gray-100 rounded-lg"><Filter size={18} /></button>
                 <button className="p-2 text-slate-500 hover:bg-gray-100 rounded-lg"><RefreshCw size={18} /></button>
             </div>
         </div>

         <div className="flex-1 overflow-y-auto">
             {filteredMails.map((mail) => (
                 <div 
                    key={mail.id}
                    onClick={() => setSelectedMail(mail)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-blue-50/50 transition-colors ${selectedMail?.id === mail.id ? 'bg-blue-50 border-l-4 border-l-blue-600' : 'border-l-4 border-l-transparent'}`}
                 >
                     <div className="flex justify-between items-start mb-1">
                         <div className="flex items-center gap-2">
                             {mail.isImportant && <AlertCircle size={14} className="text-red-500 fill-red-50" />}
                             <span className={`text-sm font-bold ${!mail.isRead ? 'text-slate-900' : 'text-slate-600'}`}>{mail.sender}</span>
                             {mail.tag && <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">{mail.tag}</span>}
                         </div>
                         <span className="text-xs text-slate-400 whitespace-nowrap">{mail.date}</span>
                     </div>
                     <h4 className={`text-sm mb-1 truncate ${!mail.isRead ? 'font-bold text-slate-900' : 'text-slate-700'}`}>{mail.title}</h4>
                     <p className="text-xs text-slate-500 truncate">{mail.preview}</p>
                     <div className="flex gap-2 mt-2">
                         {mail.hasAttachment && <span className="flex items-center gap-1 text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500"><Paperclip size={10} /> 첨부파일</span>}
                         {mail.isVip && <span className="flex items-center gap-1 text-[10px] bg-yellow-50 px-2 py-0.5 rounded text-yellow-600"><Star size={10} /> VIP</span>}
                     </div>
                 </div>
             ))}
         </div>
      </div>

      <div className={`flex-[1.5] bg-gray-50 flex flex-col ${selectedMail ? 'flex' : 'hidden lg:flex'}`}>
         {selectedMail ? (
             <div className="flex-col h-full bg-white flex animate-fade-in">
                 <div className="p-8 border-b border-gray-100">
                     <div className="flex justify-between items-start mb-6">
                         <h1 className="text-2xl font-bold text-slate-900 leading-tight">{selectedMail.title}</h1>
                         <div className="flex gap-2">
                             <button className="p-2 hover:bg-gray-100 rounded text-slate-500"><Star size={18} className={selectedMail.isVip ? 'fill-yellow-400 text-yellow-400' : ''} /></button>
                             <button className="p-2 hover:bg-gray-100 rounded text-slate-500"><MoreVertical size={18} /></button>
                         </div>
                     </div>
                     <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                             {selectedMail.sender[0]}
                         </div>
                         <div>
                             <div className="font-bold text-slate-900">{selectedMail.sender} <span className="text-slate-400 font-normal text-sm">&lt;{selectedMail.senderEmail}&gt;</span></div>
                             <div className="text-xs text-slate-500">To: 나 (김태호)</div>
                         </div>
                     </div>
                 </div>
                 <div className="p-8 flex-1 overflow-y-auto">
                     <p className="text-slate-700 leading-relaxed whitespace-pre-wrap text-base">{selectedMail.content}</p>
                     
                     {selectedMail.hasAttachment && (
                         <div className="mt-8 pt-6 border-t border-gray-100">
                             <h5 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2"><Paperclip size={16} /> 첨부파일 (1)</h5>
                             <div className="flex items-center p-3 border border-gray-200 rounded-lg bg-gray-50 w-80 cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-colors">
                                 <div className="w-10 h-10 bg-white rounded border border-gray-200 flex items-center justify-center text-red-500"><File size={20} /></div>
                                 <div className="ml-3">
                                     <p className="text-sm font-medium text-slate-800">Attached_File_v1.0.pdf</p>
                                     <p className="text-xs text-slate-500">2.4 MB</p>
                                 </div>
                             </div>
                         </div>
                     )}
                 </div>
                 <div className="p-4 border-t border-gray-200 bg-gray-50 flex gap-4">
                     <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 shadow-sm transition-colors">답장</button>
                     <button className="px-6 py-2 bg-white border border-gray-300 text-slate-700 rounded-lg font-medium hover:bg-gray-100 transition-colors">전달</button>
                 </div>
             </div>
         ) : (
             <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50/50">
                 <div className="w-full max-w-2xl">
                     <div className="text-center mb-12">
                         <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                             <Mail size={40} className="text-blue-500" />
                         </div>
                         <h3 className="text-2xl font-bold text-slate-800 mb-2">안녕하세요, 김태호님!</h3>
                         <p className="text-slate-500">오늘 확인해야 할 중요한 메일들을 요약해드립니다.</p>
                     </div>
                     
                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                         <div onClick={() => setFilterType('attachment')} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 cursor-pointer transition-all group">
                             <Paperclip className="mb-4 text-slate-400 group-hover:text-blue-500" />
                             <p className="text-sm text-slate-500 mb-1">첨부파일</p>
                             <p className="text-3xl font-bold text-slate-800">{stats.attachment}</p>
                         </div>
                         <div onClick={() => setFilterType('vip')} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-300 cursor-pointer transition-all group">
                             <Star className="mb-4 text-slate-400 group-hover:text-yellow-500" />
                             <p className="text-sm text-slate-500 mb-1">VIP 메일</p>
                             <p className="text-3xl font-bold text-slate-800">{stats.vip}</p>
                         </div>
                         <div onClick={() => setFilterType('important')} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-red-300 cursor-pointer transition-all group">
                             <AlertCircle className="mb-4 text-slate-400 group-hover:text-red-500" />
                             <p className="text-sm text-slate-500 mb-1">중요</p>
                             <p className="text-3xl font-bold text-slate-800">{stats.important}</p>
                         </div>
                         <div onClick={() => setFilterType('mention')} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-300 cursor-pointer transition-all group">
                             <MoreVertical className="mb-4 text-slate-400 group-hover:text-indigo-500" />
                             <p className="text-sm text-slate-500 mb-1">멘션됨</p>
                             <p className="text-3xl font-bold text-slate-800">{stats.mention}</p>
                         </div>
                     </div>
                 </div>
             </div>
         )}
      </div>
    </div>
  );
};

export default MailView;