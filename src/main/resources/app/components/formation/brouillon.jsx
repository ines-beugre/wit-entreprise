import moment from "./formation";

{
    modules &&
    modules.map((module) => {

        let i = modules.indexOf(module);
        return (
            <div key={module.id} className="timeline">

                {
                    (i % 2) === 0 ?
                        <div className="container right">
                            <div className="content">
                                <div className="content-hour">
                                    <div className="content-start">
                                        {moment(module.startTime).format('LT')}
                                    </div>

                                    <div className="content-end">
                                        {moment(module.endTime).format('LT')}
                                    </div>
                                </div>

                                <div className="content-name">
                                    {module.name}
                                </div>

                            </div>
                        </div>

