export default function FooterPage() {
  return (
    <footer className="bg-primary text-black  py-12 w-full h-full">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul>
              <li>
                <a
                  href="https://www.airbnb.co.in/help"
                  target="_blank"
                  className="hover:text-gray-400"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="https://www.airbnb.co.in/help/article/3218"
                  target="_blank"
                  className="hover:text-gray-400"
                >
                  AirCover
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Diversity & Belonging
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Trust & Safety
                </a>
              </li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Discover</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Trust & Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Travel Credit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Business Travel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Guidebooks
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Neighborhood Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Cancellation Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  COVID-19 Response
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Supporting Hosts
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-600" />

        {/* Legal */}
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Airbnb, Inc. All rights reserved.</p>
          <div>
            <a href="#" className="mr-4 hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
