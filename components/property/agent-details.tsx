import { ConsumerAdvertiser } from '@/lib/types';

const AgentDetail = ({ name, detail }: { name: string; detail: string }) => (
  <div className="flex flex-row gap-1 align-center">
    <span className="text-gray-500 dark:text-neutral-400 w-40">{name}</span>{' '}
    <span>{detail}</span>
  </div>
);
export function AgentDetails({
  agent,
  office,
}: {
  agent: ConsumerAdvertiser;
  office: ConsumerAdvertiser;
}) {
  return (
    <section>
      <div className="  py-4 my-4 flex justify-around flex-col md:flex-row gap-4">
        <div className="flex space-x-1 flex-col gap-4 ">
          <h6 className="px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-xl font-extrabold whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active">
            Agent Details
          </h6>
          <AgentDetail name="Agent Name" detail={agent.name} />
          <AgentDetail name="Office Name" detail={office.name} />
          <AgentDetail name="Phone" detail={office.phone || 'Not Available'} />
          <AgentDetail
            name="Website Link"
            detail={office.href || 'Not Available'}
          />
        </div>
        <div className="flex align-center justify-center flex-row md:flex-col">
          <a
            href={`tel:${office.phone}`}
            className="rounded-full w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Contact Agent
          </a>
        </div>
      </div>
    </section>
  );
}
