import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function SecretVisitsModal() {
  const [showVisits, setShowVisits] = useState(false);
  const [visits, setVisits] = useState([]);
  const [secretInput, setSecretInput] = useState("");

  useEffect(() => {
    const secretCode = "christianadmin";

    const handler = (e) => {
      setSecretInput((prev) => {
        const key = e.key.length === 1 ? e.key.toLowerCase() : "";
        const newInput = (prev + key).slice(-secretCode.length);

        if (newInput === secretCode) {
          fetchVisits();
          setShowVisits(true);
        }
        return newInput;
      });
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const fetchVisits = async () => {
    try {
      const q = query(collection(db, "visits"), orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => {
        const d = doc.data();
        return {
          ...d,
          timestamp: d.timestamp instanceof Timestamp ? d.timestamp.toDate() : d.timestamp,
        };
      });

      setVisits(data);
    } catch (error) {
      console.error("Error fetching visits:", error);
    }
  };

  return (
    <>
      {showVisits && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-96 max-h-[80vh] overflow-y-auto shadow-lg">
            <h2 className="text-xl font-bold mb-4">👀 Visitor Logs</h2>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded mb-4"
              onClick={() => setShowVisits(false)}
            >
              Close
            </button>
            <ul>
              {visits.map((v, i) => (
                <li key={i} className="mb-2 border-b pb-2">
                  <p><strong>Time:</strong> {v.timestamp ? new Date(v.timestamp).toLocaleString() : "N/A"}</p>
                  <p><strong>Agent:</strong> {v.userAgent}</p>
                  <p><strong>Lang:</strong> {v.language}</p>
                  <p><strong>Platform:</strong> {v.platform}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}