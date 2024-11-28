import SectionHeader from "./sections/section-header";
import SectionMyRole from "./sections/section-my-role";
import SectionTheProject from "./sections/section-the-project";
import { SectionHeaderData } from "@/assets/header-work-data";
import { SectionMyRoleData } from "@/assets/my-role-work-data";
import { SectionTheProjectData } from "@/assets/project-data";

export const metadata = {
  title: "Work Details",
  description: "Work Details",
};

const WorkDetails = ({ params }: { params: { id: string } }) => {
  const id = Number(params.id); // Convertimos `id` a número
  const data = SectionHeaderData[id];
  const data2 = SectionMyRoleData[id];
  const data3 = SectionTheProjectData[id];

  if (!data) {
    return <p>Work not found</p>; // Si no existe el dato, mostramos un mensaje
  }
  return (
    <main>
      <SectionHeader data={data} />
      <SectionMyRole data={data2} />
      <SectionTheProject data={data3} />
    </main>
  );
};

export async function generateStaticParams() {
  // Genera rutas dinámicas para cada elemento en `SectionHeaderData`
  return SectionHeaderData.map((_, index) => ({
    id: index.toString(),
  }));
}
export default WorkDetails;
