
import Image from 'next/image';
import Link from 'next/link';

interface CompanyCardProps {
    headerImage: string;
    logoImage: string;
    companyName: string;
    headerImageWidth?: number;
    headerImageHeight?: number;
    logoWidth?: number;
    logoHeight?: number;
    link: string
}

const CompanyCard: React.FC<CompanyCardProps> = ({
    headerImage,
    logoImage,
    companyName,
    headerImageWidth = 150,
    headerImageHeight = 150,
    logoWidth = 80,
    logoHeight = 80,
    link
}) => {
    return (

        <div className="bg-white shadow-md p-3 cursor-pointer">
            <Link href={link}>
                <Image
                    src={headerImage}
                    width={headerImageWidth}
                    height={headerImageHeight}
                    className="object-fill w-full h-[200px]"
                    alt={`${companyName} header`}
                />
                <div className="flex items-center justify-center mt-4">
                    <Image
                        src={logoImage}
                        width={logoWidth}
                        height={logoHeight}
                        alt={`${companyName} logo`}
                    />
                </div>
            </Link>
        </div>
    );
};








const ImageGallery = () => {
    const images = [
        { src: '/company-image/company-logo/capgemini1.webp', name: "Capgemini" },
        { src: '/company-image/company-logo/google-logo.png', name: "Google" },
        { src: '/company-image/company-logo/HDFC-Bank-logo.jpg', name: "HDFC Bank" },
        { src: '/company-image/company-logo/icici-bank-vector-logo.png', name: "ICICI Bank" },
        { src: '/company-image/company-logo/infosys-logo-png.png', name: "Infosys" },
        { src: '/company-image/company-logo/kotak-bank.png', name: "Kotak Mahindra Bank" },
        { src: '/company-image/company-logo/LTIMindtree.png', name: "LTI Mindtree" },
        { src: '/company-image/company-logo/microsoft2.png', name: "Microsoft" },
        { src: '/company-image/company-logo/NTTDATA.png', name: "NTT Data" },
        { src: '/company-image/company-logo/SBI-bank.png', name: "State Bank of India (SBI)" },
        { src: '/company-image/company-logo/tcs.webp', name: "TCS (Tata Consultancy Services)" },
        { src: '/company-image/company-logo/example-logo.png', name: "Amazon" },
    ];

    return (

        <div className="flex items-center justify-center my-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded flex items-center justify-center h-[80px] p-4"
                    >
                        <Image
                            src={image.src}
                            width={100}
                            height={100}
                            className="object-cover w-full aspect-1/1"
                            alt={image.name}
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};










const CoolPlacesToWork = () => {
    const companies = [
        {
            headerImage: '/company-image/infosys-head.jpg',
            logoImage: '/company-image/company-logo/infosys.png',
            companyName: 'Infosys',
            url: "https://recruiter.shine.com/micro-site/infosys-jobs"
        },
        {
            headerImage: '/company-image/capgemini-head.jpg',
            logoImage: '/company-image/company-logo/capgemini.jpg',
            companyName: 'Capgemini',
            url: "https://recruiter.shine.com/micro-site/capgemini-technology-services-india-limited-jobs"
        },
        {
            headerImage: '/company-image/sbi-headq.jpg',
            logoImage: '/company-image/company-logo/SBI.png',
            companyName: 'SBI',
            url: "https://sbi.co.in/web/careers/Current-openings"
        },
        {
            headerImage: '/company-image/amazone-head.png',
            logoImage: '/company-image/company-logo/amazone.png',
            companyName: 'Amazon',
            url: "https://www.amazon.jobs/content/en/job-categories"
        },
        {
            headerImage: '/company-image/tsc-head.jpg',
            logoImage: '/company-image/company-logo/tcs.webp',
            companyName: 'TSC',
            url: "https://www.tcs.com/careers"
        },
    ];

    return (
        <>
            <div className="my-7">
                <h3 className="text-center text-5xl font-sans mt-10 font-bold">
                    Cool Places to Work
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 p-10">
                    {companies.map((company, index) => (
                        <CompanyCard
                            key={index}
                            headerImage={company.headerImage}
                            logoImage={company.logoImage}
                            companyName={company.companyName}
                            link={company.url}
                        />
                    ))}
                </div>
            </div>
            {/* image gallery */}
            <div className="my-7">
                <h3 className="text-center text-5xl font-sans mt-10 font-bold">
                    Top Hiring Companies
                </h3>
                {/* image gallery */}
                <ImageGallery />
                {/* close image gallery */}
            </div>

        </>
    );
};

export default CoolPlacesToWork;
