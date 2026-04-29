import { Check, X, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";

export default function Who() {
  return (
    <section className="mx-6 my-16 bg-blue-600 text-white rounded-3xl p-10 md:p-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <div>
          <p className="text-lg">Who Should Join?</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Strategic Skill Enhancement
          </h2>

          <Image
            src="/hero.webp"
            alt=""
            width={400}
            height={300}
            className="mt-6"
          />
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          <div>
            <Check className="mb-2" />
            <h3 className="font-semibold text-lg">Tech Professionals</h3>
            <p className="text-sm opacity-90">
              Enhance expertise and drive innovation
            </p>
          </div>

          <div>
            <X className="mb-2" />
            <h3 className="font-semibold text-lg">Non-Tech Professionals</h3>
            <p className="text-sm opacity-90">
              Adapt digitally and collaborate in tech environments
            </p>
          </div>

          <div>
            <GraduationCap className="mb-2" />
            <h3 className="font-semibold text-lg">Emerging Professionals</h3>
            <p className="text-sm opacity-90">
              Develop skills for rapid growth
            </p>
          </div>

          <div>
            <Briefcase className="mb-2" />
            <h3 className="font-semibold text-lg">Senior Professionals</h3>
            <p className="text-sm opacity-90">
              Strengthen leadership and strategy
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}