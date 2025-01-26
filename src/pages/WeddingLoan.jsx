import React, { useState } from "react";
import UserInfoModal from "../components/userInfoModal";

export default function Wedding() {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState(1);
  const [loanBreakdown, setLoanBreakdown] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!category || !subcategory || !initialDeposit || initialDeposit <= 0) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const maxLoan = 500000; // Maximum loan amount
    const loanAmount = maxLoan - initialDeposit; // Loan amount after deposit
    const totalPayable = loanAmount; // Total payable amount (no interest)
    const monthlyInstallment = totalPayable / (loanPeriod * 12); // Monthly installment

    setLoanBreakdown({
      loanAmount: loanAmount.toFixed(2),
      totalPayable: totalPayable.toFixed(2),
      monthlyInstallment: monthlyInstallment.toFixed(2),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Wedding Loan Application
        </h1>

        {/* Form */}
        <form onSubmit={handleCalculate}>
          {/* Category Dropdown */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-300 font-medium mb-2"
            >
              Loan Category
            </label>
            <select
              id="category"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Wedding Loan">Wedding Loan</option>
            </select>
          </div>

          {/* Subcategory Dropdown */}
          <div className="mb-4">
            <label
              htmlFor="subcategory"
              className="block text-gray-300 font-medium mb-2"
            >
              Subcategory
            </label>
            <select
              id="subcategory"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
            >
              <option value="" disabled>
                Select a subcategory
              </option>
              <option value="valima">Valima</option>
              <option value="furniture">Furniture</option>
              <option value="valimaFood">Valima Food</option>
              <option value="jahez">Jahez</option>
            </select>
          </div>

          {/* Initial Deposit */}
          <div className="mb-4">
            <label
              htmlFor="initialDeposit"
              className="block text-gray-300 font-medium mb-2"
            >
              Initial Deposit (PKR)
            </label>
            <input
              type="number"
              id="initialDeposit"
              value={initialDeposit}
              onChange={(e) => setInitialDeposit(e.target.value)}
              placeholder="Enter initial deposit amount"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
          </div>

          {/* Loan Period */}
          <div className="mb-4">
            <label
              htmlFor="loanPeriod"
              className="block text-gray-300 font-medium mb-2"
            >
              Loan Period (Years)
            </label>
            <select
              id="loanPeriod"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
              value={loanPeriod}
              onChange={(e) => setLoanPeriod(Number(e.target.value))}
            >
              <option value={1}>1 Year</option>
              <option value={2}>2 Years</option>
              <option value={3}>3 Years</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-3 rounded-lg font-medium hover:bg-cyan-700 transition duration-300"
          >
            Calculate Loan
          </button>
        </form>

        {/* Loan Breakdown */}
        {loanBreakdown && (
          <div className="mt-6 bg-gray-700 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-white mb-4">
              Loan Breakdown
            </h2>
            <div className="space-y-3">
              <p className="text-gray-300">
                <strong>Loan Amount:</strong> PKR {loanBreakdown.loanAmount}
              </p>
              <p className="text-gray-300">
                <strong>Total Payable:</strong> PKR {loanBreakdown.totalPayable}
              </p>
              <p className="text-gray-300">
                <strong>Monthly Installment:</strong> PKR {loanBreakdown.monthlyInstallment}
              </p>
            </div>
            <div className="mt-4">
              <UserInfoModal />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}