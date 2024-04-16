import ClientsCard from "./ClientsCard";
function Clients() {
  return (
    <div className="max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl text-center md:text-left md:text-3xl text-gray-800 ">
            Our Clients
          </h2>
          <p className="mt-2 md:mt-4 text-gray-500">
            At Star Painting, our foremost commitment is to provide exemplary
            painting, decorating, epoxy flooring, and related services tailored
            to meet the needs of our diverse clientele, spanning residential and
            commercial sectors throughout the Addis Ababa region.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            <ClientsCard
              title={"Residential Clients"}
              description={
                "Our team of seasoned professionals is committed to turning your residential painting dreams into reality."
              }
              icon={
                <svg
                  className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
              }
            />
            <ClientsCard
              title={"Commercial Clients"}
              description={
                "We have the knowledge and skillset to deliver results that exceed your expectations."
              }
              icon={
                <svg
                  className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
              }
            />

            <ClientsCard
              title={"Government and Public Sector"}
              description={
                "We have the knowledge and skillset to deliver results that exceed your expectations."
              }
              icon={
                <svg
                  className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
              }
            />
            <ClientsCard
              title="Real Estate Investors"
              description={
                "We have the knowledge and skillset to deliver results that exceed your expectations."
              }
              icon={
                <svg
                  className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
