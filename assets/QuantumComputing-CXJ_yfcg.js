import{c as l,u as n,r as c,j as e,N as o,A as m,C as s,a,Z as d,F as x}from"./index-B5Nz2cjD.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],i=l("calculator",h);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],u=l("code",p),j=()=>(n("quantum-computing"),c.useEffect(()=>{const r=document.createElement("script");r.src="https://polyfill.io/v3/polyfill.min.js?features=es6",document.head.appendChild(r);const t=document.createElement("script");return t.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",t.id="MathJax-script",t.async=!0,document.head.appendChild(t),window.MathJax={tex:{inlineMath:[["\\(","\\)"]],displayMath:[["\\[","\\]"]]},options:{ignoreHtmlClass:"tex2jax_ignore",processHtmlClass:"tex2jax_process"}},()=>{r.parentNode&&document.head.removeChild(r),t.parentNode&&document.head.removeChild(t)}},[]),e.jsxs("div",{className:"min-h-screen relative",children:[e.jsx(o,{}),e.jsx("div",{className:"pt-32 pb-20 px-6",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("div",{className:"text-center mb-16",children:e.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:["Understanding of ",e.jsx("span",{className:"bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",children:"Single Qubit"})]})}),e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx(m,{className:"h-8 w-8 text-blue-400 mr-4"}),e.jsx("h2",{className:"text-3xl font-bold text-white",children:"Quantum Information"})]}),e.jsx(s,{className:"bg-slate-800/50 border-slate-700/50 backdrop-blur-sm",children:e.jsxs(a,{className:"p-6",children:[e.jsx("p",{className:"text-gray-300 leading-relaxed mb-4",children:"Quantum information refers to the field that explores how information can be stored and manipulated using the principles of quantum mechanics. In classical computing, information is processed in bits, which can represent either a 0 or a 1. However, in quantum computing, quantum bits or qubits can exist in a superposition of both 0 and 1 states simultaneously, allowing for parallel computation and potentially solving certain problems much faster than classical computers."}),e.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Quantum information also deals with concepts like entanglement, where the state of one qubit becomes dependent on the state of another, regardless of the distance between them. This property can be utilized for secure communication and cryptography, where any eavesdropping would disturb the entangled particles, alerting the communicating parties."})]})})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx(i,{className:"h-8 w-8 text-purple-400 mr-4"}),e.jsx("h2",{className:"text-3xl font-bold text-white",children:"Quantum State Vectors"})]}),e.jsx(s,{className:"bg-slate-800/50 border-slate-700/50 backdrop-blur-sm",children:e.jsxs(a,{className:"p-6",children:[e.jsx("p",{className:"text-gray-300 leading-relaxed mb-4",children:"The quantum state of a system is represented by a column vector, similar to probabilistic states. Vectors representing quantum states are characterized by two properties:"}),e.jsxs("ol",{className:"list-decimal list-inside text-gray-300 mb-6 space-y-2",children:[e.jsx("li",{children:"The entries of a quantum state vector are complex numbers."}),e.jsx("li",{children:"The sum of the absolute values squared of the entries of the vector is 1."})]}),e.jsx("p",{className:"text-gray-300 mb-4",children:"The Euclidean norm of a column vector is denoted and defined as follows:"}),e.jsx("div",{className:"bg-slate-900/50 p-4 rounded-lg mb-4 text-center",children:e.jsx("span",{className:"text-blue-400 font-mono text-lg",children:"||v|| = √(Σ|αₖ|²)"})}),e.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Quantum state vectors are unit vectors concerning the Euclidean norm."})]})})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx(d,{className:"h-8 w-8 text-green-400 mr-4"}),e.jsx("h2",{className:"text-3xl font-bold text-white",children:"Measuring Quantum States"})]}),e.jsx(s,{className:"bg-slate-800/50 border-slate-700/50 backdrop-blur-sm",children:e.jsxs(a,{className:"p-6",children:[e.jsx("p",{className:"text-gray-300 leading-relaxed mb-4",children:`Measuring quantum states is a fundamental aspect of quantum mechanics. A measurement collapses the quantum state of a system into one of its possible outcomes. For instance, measuring the spin of a particle along a certain axis might yield "up" or "down." Before measurement, the particle's spin might exist in a superposition of both states, but upon measurement, it collapses to one state.`}),e.jsx("p",{className:"text-gray-300 leading-relaxed",children:"The act of measurement is inherently probabilistic, and measuring entangled particles can instantly determine the state of another, regardless of distance."})]})})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx(i,{className:"h-8 w-8 text-yellow-400 mr-4"}),e.jsx("h2",{className:"text-3xl font-bold text-white",children:"Unitary Operations"})]}),e.jsx(s,{className:"bg-slate-800/50 border-slate-700/50 backdrop-blur-sm",children:e.jsx(a,{className:"p-6",children:e.jsx("p",{className:"text-gray-300 leading-relaxed",children:"In quantum mechanics, operations on quantum states are described by unitary transformations, represented by unitary matrices. These operations preserve the normalization of the quantum state and are reversible. A unitary matrix U has the property that U†U = I, where U† is the conjugate transpose."})})})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx(u,{className:"h-8 w-8 text-blue-400 mr-4"}),e.jsx("h2",{className:"text-3xl font-bold text-white",children:"Qiskit Examples"})]}),e.jsx(s,{className:"bg-slate-800/50 border-slate-700/50 backdrop-blur-sm",children:e.jsxs(a,{className:"p-6",children:[e.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:"Starting with Qiskit:"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"text-lg font-semibold text-blue-400 mb-3",children:"Installation"}),e.jsx("div",{className:"bg-slate-900 p-4 rounded-lg",children:e.jsx("pre",{className:"text-green-400 text-sm",children:`pip install qiskit
pip install matplotlib
pip install numpy`})})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"text-lg font-semibold text-blue-400 mb-3",children:"Define State Vectors"}),e.jsx("div",{className:"bg-slate-900 p-4 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-green-400 text-sm",children:`from qiskit.quantum_info import Statevector
from qiskit.visualization import plot_histogram
from numpy import sqrt

# Define state vectors
u = Statevector([1 / sqrt(2), 1 / sqrt(2)])
v = Statevector([(1 + 2j) / 3, -2 / 3])
w = Statevector([1 / 3, 2 / 3])

# Display state vectors
display(u.draw("latex"))
display(v.draw("text"))
# [0.33333333+0.66666667j, -0.66666667+0.j]

# Check validity
display(u.is_valid())  # True
display(w.is_valid())  # False

# Measure
v.draw("latex")
v.measure()  # (1, Statevector([0.+0.j, -1.+0.j], dims=(2,)))`})})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"text-lg font-semibold text-blue-400 mb-3",children:"Define Operators"}),e.jsx("div",{className:"bg-slate-900 p-4 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-green-400 text-sm",children:`from qiskit.quantum_info import Operator

X = Operator([[0, 1], [1, 0]])
Y = Operator([[0, -1.0j], [1.0j, 0]])
Z = Operator([[1, 0], [0, -1]])
H = Operator([[1 / sqrt(2), 1 / sqrt(2)], [1 / sqrt(2), -1 / sqrt(2)]])
S = Operator([[1, 0], [0, 1.0j]])
T = Operator([[1, 0], [0, (1 + 1.0j) / sqrt(2)]])`})})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"text-lg font-semibold text-blue-400 mb-3",children:"Perform Operations"}),e.jsx("div",{className:"bg-slate-900 p-4 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-green-400 text-sm",children:`v = Statevector([1, 0])
v = v.evolve(H)
v = v.evolve(T)
v = v.evolve(H)
v = v.evolve(T)
v = v.evolve(Z)
v.draw("text")  # [0.85355339+0.35355339j, -0.35355339+0.1464466j]`})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold text-blue-400 mb-3",children:"Create Circuits"}),e.jsx("div",{className:"bg-slate-900 p-4 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-green-400 text-sm",children:`from qiskit import QuantumCircuit
circuit = QuantumCircuit(1)
circuit.h(0)
circuit.t(0)
circuit.h(0)
circuit.t(0)
circuit.z(0)
circuit.draw()

ket0 = Statevector([1, 0])
v = ket0.evolve(circuit)
v.draw("text")  # [0.85355339+0.35355339j, -0.35355339+0.1464466j]`})})]})]})})]})]})]})}),e.jsx(x,{})]}));export{j as default};
