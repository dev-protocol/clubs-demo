<script lang="ts">
  import WelcomeWizardStep from './WelcomeWizardStep.svelte'

  export let step: 'HOME' | 'MEMBERSHIPS' | 'PLUGINS'
</script>

<div class="h-screen py-12 px-16">
  <WelcomeWizardStep
    label="Homepage"
    isActive={step === 'HOME'}
    isComplete={step === 'MEMBERSHIPS' || step === 'PLUGINS'}
  />

  <WelcomeWizardStep
    label="Memberships"
    isActive={step === 'MEMBERSHIPS'}
    isComplete={step === 'PLUGINS'}
  />

  <WelcomeWizardStep
    label="Plugins"
    isActive={step === 'PLUGINS'}
    isComplete={false}
  />
</div>
