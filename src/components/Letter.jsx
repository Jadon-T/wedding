function LettersSection() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Letters to Each Other</h2>
            <div className="space-y-8 md:space-y-12">
                <div className="bg-white px-4 py-2 rounded-xl rounded-bl-none max-w-xs shadow-md ml-auto">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">From Jadon to Wedding</h3>
                    <p className="text-gray-600 leading-relaxed">
                        My dearest Wedding, you are my sunshine, my compass, and my heart's delight. Every moment with you feels like an eternity of joy.
                    </p>
                </div>
                <div className="bg-white px-4 py-2 rounded-xl rounded-tr-none max-w-xs shadow-md">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">From Wedding to Jadon</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Jadon, you are my safe haven, my dream come true, and the love I never thought I'd find. I look forward to building our forever.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LettersSection;