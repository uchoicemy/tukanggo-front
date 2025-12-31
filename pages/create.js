import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function RequestFormTemplatePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    customerName: "",
    contactNumber: "",
    address: "",
    area: "",   
    categoryName: "",
    requirement: "",
    preferredDateTime: "",
    budget: "",
  });

  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Error loading categories", err);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Submitting...");
    setStatusType("");

    try {
      const res = await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(data.message || "✔ Request submitted successfully!");
        setStatusType("success");
        router.push(`/booking-received?refNo=${data.refNo}`);
        setFormData({
          customerName: "",
          contactNumber: "",
          address: "",
          area: "",
          categoryName: "",
          requirement: "",
          preferredDateTime: "",
          budget: "",
        });
      } else {
        setStatus(data.message || "❌ Submission failed.");
        setStatusType("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Network error. Please try again.");
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    pageWrapper: { display: "flex", flexWrap: "wrap", maxWidth: 1000, margin: "20px auto", gap: 20 },
    leftColumn: { flex: "2 1 600px" },
    rightColumn: { flex: "1 1 300px", padding: 20, background: "#f5f7fa", borderRadius: 8, height: "fit-content" },
    formContainer: { padding: 20, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
    formTitle: { marginBottom: 20 },
    formLabel: { display: "block", marginTop: 10, marginBottom: 4, fontWeight: 600 },
    formInput: { width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc", marginBottom: 10 },
    submitButton: { marginTop: 10, padding: "10px 16px", border: "none", borderRadius: 6, background: "#2196F3", color: "#fff", cursor: "pointer" },
    submitButtonDisabled: { background: "#90CAF9", cursor: "not-allowed" },
    statusSuccess: { color: "green", marginTop: 10 },
    statusError: { color: "red", marginTop: 10 },
  };

  const malaysiaAreas = [
    "Kuala Lumpur",
    "Selangor",
    "Penang",
    "Johor",
    "Sabah",
    "Sarawak",
    "Melaka",
    "Negeri Sembilan",
    "Perak",
    "Pahang",
    "Terengganu",
    "Kelantan",
    "Perlis",
    "Kedah",
    "Labuan",
    "Putrajaya"
  ];


  return (
    <>
      <Header />

      {/* Breadcrumbs */}
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Services</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li>Services</li>
            </ol>
          </div>
        </div>
      </section>

      <div style={styles.pageWrapper}>
        {/* Left column: Form */}
        <div style={styles.leftColumn}>
          <div style={styles.formContainer}>
            <h2 style={styles.formTitle}>Request Form</h2>
            <form onSubmit={handleSubmit}>
              <label style={styles.formLabel}>Customer Name</label>
              <input
                type="text"
                name="customerName"
                style={styles.formInput}
                value={formData.customerName}
                onChange={handleChange}
                required
              />

              <label style={styles.formLabel}>Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                style={styles.formInput}
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />

              <label style={styles.formLabel}>Address</label>
              <input
                type="text"
                name="address"
                style={styles.formInput}
                value={formData.address}
                onChange={handleChange}
                required
              />

              <label style={styles.formLabel}>Area (Malaysia)</label>
              <select
                name="area"
                style={styles.formInput}
                value={formData.area}
                onChange={handleChange}
                required
              >
                <option value="">Select your area</option>
                {malaysiaAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>

              <label style={styles.formLabel}>Service Category</label>
              <select
                name="categoryName"
                style={styles.formInput}
                value={formData.categoryName}
                onChange={handleChange}
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <label style={styles.formLabel}>Requirement</label>
              <textarea
                name="requirement"
                style={styles.formInput}
                rows="4"
                value={formData.requirement}
                onChange={handleChange}
                required
              />

              <label style={styles.formLabel}>Preferred Date & Time</label>
              <input
                type="datetime-local"
                name="preferredDateTime"
                style={styles.formInput}
                value={formData.preferredDateTime}
                onChange={handleChange}
                required
              />

              <label style={styles.formLabel}>Budget (MYR)</label>
              <input
                type="number"
                name="budget"
                style={styles.formInput}
                value={formData.budget}
                onChange={handleChange}
                min="0"
                required
              />

              <button
                type="submit"
                style={{
                  ...styles.submitButton,
                  ...(isSubmitting ? styles.submitButtonDisabled : {}),
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>

            {status && (
              <p style={statusType === "error" ? styles.statusError : styles.statusSuccess}>
                {status}
              </p>
            )}
          </div>
        </div>

        {/* Right column: Guidelines */}
        <div style={styles.rightColumn}>
          <h3>Form Guidelines</h3>
          <p>1. Enter your full name</p>
          <p>2. Provide a valid contact number</p>
          <p>3. Fill your address accurately</p>
          <p>4. Describe your requirement in detail</p>
          <p>5. Select preferred date & time</p>
          <p>6. Enter budget in MYR</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
