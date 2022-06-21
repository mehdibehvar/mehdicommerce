
export default function StepWizard({active}) {
    const steps=["ورود","ثبت ادرس","شیوه پرداخت","پرداخت نهایی"];
    const stepList=steps.map(step=><li key={steps.indexOf(step)} className={`breadcrumb-item ${steps.indexOf(step)==active?"active text-primary":null}`}>{step}</li>)
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
{stepList}
</div>
  )
}
