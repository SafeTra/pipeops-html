    const SectionTitles = ({ text }) => {
        return (
        <div className="py-4 text-center mb-8">
            <div className="container mx-auto">
            <h1 className="text-5xl font-bold relative">
                {text}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-50 h-1 bg-black font-bold"></div>
            </h1>
            </div>
        </div>
        );
    };
    
    export default SectionTitles;
    