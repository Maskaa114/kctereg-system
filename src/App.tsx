import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function App() {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const email = `${id.toLowerCase()}@kctereg.local`;
      await signInWithEmailAndPassword(auth, email, pass);
      alert("Waad gashay!");
    } catch (error: any) {
      alert("ID ama Password waa khaldan yahay!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-4">
      <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-800 w-full max-w-md text-center">
        <h1 className="text-4xl font-black text-blue-500 mb-2 italic tracking-tighter text-center">KCTE 2019</h1>
        <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-10 font-bold opacity-70">Grade Management System</p>
        
        <form onSubmit={handleLogin} className="space-y-5 text-left">
          <div>
            <label className="text-[10px] text-slate-500 font-black ml-1 uppercase">Student ID Number</label>
            <input 
              type="text" 
              placeholder="Ex: KCTE00125" 
              className="w-full p-4 bg-slate-950 border border-slate-800 rounded-2xl outline-none focus:border-blue-600 transition text-sm" 
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div>
            <label className="text-[10px] text-slate-500 font-black ml-1 uppercase">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full p-4 bg-slate-950 border border-slate-800 rounded-2xl outline-none focus:border-blue-600 transition text-sm" 
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg shadow-blue-900/20 active:scale-95">
            {loading ? "Checking..." : "Sign In"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-800/50">
           <button className="text-blue-400 text-xs font-bold hover:text-blue-300 transition uppercase tracking-tighter">
             Set up your first password
           </button>
        </div>
      </div>
    </div>
  );
}

export default App;
