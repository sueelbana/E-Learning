import { Star } from "lucide-react"; 
import userImage from "../assets/user.jpg";

export default function TestimonialCard() {
  return (
    <div
      className="p-6 rounded-lg shadow-md max-w-4xl mx-auto"
      style={{ backgroundColor: "rgba(244, 140, 6, 0.3)" }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={userImage}
          alt="Reviewer"
          className="w-12 h-12 object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">Bulkin Simons</h3>
          <div className="flex text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
        eiusmodLorem
      </p>
    </div>
  );
}
