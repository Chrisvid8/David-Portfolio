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
          timestamp: d.timestamp instanceof Timestamp ? d.timestamp.toDate() : new Date(d.timestamp),
        };
      });

      console.log("Fetched visits:", data);
      setVisits(data);
    } catch (error) {
      console.error("Error fetching visits:", error);
    }
  };

  return (
    <>
      {showVisits && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity">
          <div className="bg-gray-900 text-white p-6 md:p-8 rounded-2xl w-11/12 max-w-lg max-h-[80vh] overflow-y-auto shadow-2xl border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">👀 Visitor Logs</h2>
              <button
                className="text-gray-300 hover:text-white transition text-lg font-bold"
                onClick={() => setShowVisits(false)}
              >
                ✕
              </button>
            </div>

            <ul className="space-y-3">
              {visits.length === 0 && (
                <li className="text-gray-400 italic">No visits yet.</li>
              )}
              {visits.map((v, i) => (
                <li
                  key={i}
                  className="bg-gray-800 p-3 rounded-xl border border-gray-700 shadow-sm"
                >
                  <p><span className="font-semibold">Time:</span> {v.timestamp ? v.timestamp.toLocaleString() : "N/A"}</p>
                  <p><span className="font-semibold">Agent:</span> {v.userAgent}</p>
                  <p><span className="font-semibold">Lang:</span> {v.language}</p>
                  <p><span className="font-semibold">Platform:</span> {v.platform}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}