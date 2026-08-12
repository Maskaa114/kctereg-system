import React, { useState } from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-4">
      <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-800 w-full max-w-md text-center">
        <h1 className="text-4xl font-black text-blue-500 mb-2 italic">KCTE 2019</h1>
        <p className="text-slate-400 text-sm uppercase tracking-tighter mb-8 font-bold">Grade Approval System</p>
        
        <div className="space-y-4 text-left">
          <div>
            <label className="text-xs text-slate-500 font-bold ml-1">STUDENT ID</label>
            <input type="text" placeholder="KCTE00xxx" className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl outline-none focus:border-blue-600 transition" />
          </div>
          <div>
            <label className="text-xs text-slate-500 font-bold ml-1">PASSWORD</label>
            <input type="password" placeholder="••••••••" className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl outline-none focus:border-blue-600 transition" />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-black text-lg transition shadow-lg shadow-blue-900/20">LOGIN</button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800">
           <button className="text-blue-400 font-bold hover:underline">SETUP STUDENT ACCOUNT</button>
        </div>
      </div>
    </div>
  );
}

export default App;
