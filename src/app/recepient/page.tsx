"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import Input from "@/components/input";

// Country data with flags and codes
const COUNTRIES = [
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+233", flag: "🇬🇭", name: "Ghana" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+90", flag: "🇹🇷", name: "Turkey" },
  { code: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "+66", flag: "🇹🇭", name: "Thailand" },
  { code: "+84", flag: "🇻🇳", name: "Vietnam" },
];

export default function RecipientPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = COUNTRIES.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.includes(searchQuery)
  );

 // Email and phone validations 
  const isEmailValid = email.endsWith("@gmail.com");
  const isPhoneValid = /^[0-9]{10,12}$/.test(phone);

  const handleSubmit = () => {
    if (isEmailValid && isPhoneValid) {
      console.log({ email, phone: `${selectedCountry.code}${phone}` });
      router.push("/next-page"); // No next page
    } else {
      alert("Please enter a valid Gmail email and a valid phone number.");
    }
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCountry = (country: typeof COUNTRIES[0]) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="relative w-full max-w-[640px] bg-white rounded-2xl sm:rounded-[32px] p-6 sm:p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(1,57,65,0.15)]">

        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="absolute top-6 sm:top-8 md:top-10 left-6 sm:left-8 md:left-16 text-[#013941] hover:text-[#025662] transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Go back"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E6FBF2] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#013941]/20 transition-all duration-300">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
        </button>

        {/* title */}
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-[#013941] mb-8 sm:mb-12">
          Recipient details
        </h2>

        {/* form */}
        <div className="space-y-6 sm:space-y-8">
          {/* email */}
          <div className="space-y-3 sm:space-y-4">
            <label className="block text-[#013941] font-semibold text-xs sm:text-sm">
              Recipient email
            </label>
            <Input
              placeholder="Enter recipient email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!isEmailValid && email && (
              <p className="text-red-500 text-xs">Email must end with @gmail.com</p>
            )}
          </div>

          {/* number */}
          <div className="space-y-3 sm:space-y-4">
            <label className="block text-[#013941] font-semibold text-xs sm:text-sm">
              Recipient phone number
            </label>

            <div className="relative">
              <div className="flex border-2 border-[#CCF6E5] rounded-2xl sm:rounded-[34px] overflow-hidden h-14 sm:h-16 md:h-[68px] focus-within:border-[#013941] focus-within:shadow-lg focus-within:shadow-[#013941]/20 transition-all duration-300 bg-white">
                {/* country code  */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="flex items-center gap-1.5 sm:gap-2 h-full px-3 sm:px-4 md:px-6 bg-[#E6FBF2] border-r-2 border-[#CCF6E5] hover:bg-[#D5F5EA] transition-all duration-300 min-w-[100px] sm:min-w-[130px] md:min-w-[150px] cursor-pointer"
                  >
                    <span className="text-xl sm:text-2xl">{selectedCountry.flag}</span>
                    <span className="text-[#013941] font-semibold text-sm sm:text-base">{selectedCountry.code}</span>
                    <svg
                      className={`w-3 h-3 sm:w-4 sm:h-4 text-[#013941] transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* input of phone */}
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-3 sm:px-4 md:px-6 outline-none text-[#013941] bg-white font-medium placeholder:text-[#013941]/50 text-sm sm:text-base"
                  placeholder="000 - 000 - 00000"
                />
              </div>
              {!isPhoneValid && phone && (
                <p className="text-red-500 text-xs mt-1">Phone number must be 10–12 digits</p>
              )}

              {/* the dropdown effect */}
              {isDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm" onClick={() => setIsDropdownOpen(false)} />
                  <div className="absolute top-full left-0 mt-2 w-full sm:w-[300px] md:w-[340px] bg-white border-2 border-[#CCF6E5] rounded-2xl sm:rounded-[24px] shadow-[0_20px_60px_rgba(1,57,65,0.25)] z-50 max-h-[320px] sm:max-h-[420px] flex flex-col overflow-hidden">
                    <div className="p-4 sm:p-6 text-center text-[#013941] text-sm font-medium">
                      <input
                        type="text"
                        placeholder="Search country..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border-2 border-[#CCF6E5] rounded-full text-xs sm:text-sm outline-none text-[#013941] placeholder-[#013941]/50 focus:border-[#013941] focus:shadow-lg focus:shadow-[#013941]/20 transition-all duration-300 font-medium"
                      />
                    </div>
                    <div className="overflow-y-auto flex-1">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => selectCountry(country)}
                            className={`w-full flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 sm:py-3.5 hover:bg-[#E6FBF2] transition-all duration-300 text-left cursor-pointer ${selectedCountry.code === country.code ? "bg-[#CCF6E5]" : ""}`}
                          >
                            <span className="text-xl sm:text-2xl">{country.flag}</span>
                            <span className="flex-1 text-xs sm:text-sm font-semibold text-gray-800">{country.name}</span>
                            <span className="text-xs sm:text-sm font-medium text-[#013941]">{country.code}</span>
                            {selectedCountry.code === country.code && (
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#013941]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </button>
                        ))
                      ) : (
                        <div className="p-6 text-center text-gray-500 text-xs sm:text-sm font-medium">
                          No countries found
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* next button visible if the email and numbers have been entered*/}
          <div className="pt-4 sm:pt-6">
            <Button
              onClick={handleSubmit}
              disabled={!isEmailValid || !isPhoneValid}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}