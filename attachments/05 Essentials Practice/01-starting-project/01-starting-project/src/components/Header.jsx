



export default function Header({onChanging,changedData}){


    return<section id="user-input">
        <div className="input-group">
        <p>
        <label>Initial Investment</label>
        <input type="number" value={changedData.initial} onChange={(event)=>onChanging("initial",event.target.value)} required/>
        </p>
        <p>
        <label >Annual Investment</label>
        <input type="number" value={changedData.annual} onChange={(event)=>onChanging("annual",event.target.value)} required/>
        </p>
        </div>
        <div className="input-group">
        <p>
        <label>Expected Return</label>
        <input type="number" value={changedData.expected} onChange={(event)=>onChanging("expected",event.target.value)} required/>
        </p>
        <p>
        <label>Duration</label>
        <input type="number" value={changedData.duration} onChange={(event)=>onChanging("duration",event.target.value)} required/>
        </p>
        </div>

    </section>
}