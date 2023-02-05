const sizes = {
    md: 'px-4 py-2 rounded-md text-base',
    lg: 'px-5 py-3 rounded-lg text-lg',
}

const colors = {
    indigo: 'bg-indigo-500 hover:bg-indigo-600 text-white',
    cyan: 'bg-cyan-600 hover:bg-cyan-700 text-white',
}

export default function Button({style}) {

    return (
        <button type="button" className={`font-bold ${style} bg-stone-400 ring-$stone-900 ring-1 rounded-xl text-[${size}] `}>
            {children}
        </button>
    )
}