export default function CandidatesPage({ candidates, deleteCandidate }) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Candidates</h2>

      {candidates.length === 0 ? (
        <p className="text-gray-500">No candidates found</p>
      ) : (
        <ul>
          {candidates.map((c) => (
            <li
              key={c._id}
              className="flex justify-between mb-4 items-center border-b pb-3"
            >
              {/* Left: Photo + Info */}
              <div className="flex items-center gap-4">
                {/* Candidate Photo */}
                {c.photo ? (
                  <img
                    src={`http://localhost:5000${c.photo}`} // full URL
                    alt={`${c.firstName} ${c.lastName}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
                    No Photo
                  </div>
                )}

                {/* Candidate Info */}
                <div>
                  <p className="font-semibold">
                    {c.firstName} {c.lastName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {c.mobile} | {c.city} | {c.state} | {c.category}
                  </p>
                  <p className="text-sm text-gray-600">{c.email}</p>

                  {/* Resume */}
                  {c.resume ? (
                    <a
                      href={`http://localhost:5000${c.resume}`} // full URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline text-sm"
                    >
                      View Resume
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm">No Resume</span>
                  )}
                </div>
              </div>

              {/* Right: Delete Button */}
              <button
                onClick={() => deleteCandidate(c._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
