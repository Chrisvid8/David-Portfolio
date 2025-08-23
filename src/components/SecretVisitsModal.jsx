import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function SecretVisitsModal() {
  const [showVisits, setShowVisits] = useState(false);
  const [visits, setVisits] = useState([]);
  const [secretInput, setSecretInput] = useState("");
  const [expanded, setExpanded] = useState({});

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

      setVisits(data);
    } catch (error) {
      console.error("Error fetching visits:", error);
    }
  };

  const groupedVisits = visits.reduce((acc, visit) => {
    const platform = visit.platform || "Unknown";
    if (!acc[platform]) acc[platform] = [];
    acc[platform].push(visit.timestamp.toLocaleString());
    return acc;
  }, {});

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
              {Object.keys(groupedVisits).length === 0 && (
                <li className="text-gray-400 italic">No visits yet.</li>
              )}
              {Object.entries(groupedVisits).map(([platform, dates]) => (
                <li
                  key={platform}
                  className="bg-gray-800 p-3 rounded-xl border border-gray-700 shadow-sm flex flex-col"
                >
                  <button
                    className="flex justify-between items-center w-full text-left focus:outline-none"
                    onClick={() =>
                      setExpanded((prev) => ({ ...prev, [platform]: !prev[platform] }))
                    }
                  >
                    <span className="font-semibold">{platform}</span>
                    {expanded[platform] ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  {expanded[platform] && (
                    <ul className="mt-2 ml-4 list-disc list-inside space-y-1 text-gray-300">
                      {dates.map((date, idx) => (
                        <li key={idx}>{date}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}