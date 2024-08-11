<template>
  <div class="kanban">
    <div
      v-for="stage in stages"
      :key="stage.id"
      class="kanban-column"
     :style="{ backgroundColor: stage.header_color }"
    >
      <h2 class="kanban-title">{{ stage.name }}</h2>
      <div
        class="kanban-cards"
        @drop="onDrop($event, stage.id)"
        @dragover="onDragOver($event)"
      >
        <div
          v-for="contact in filteredContacts(stage.id)"
          :key="contact.id"
          class="kanban-card"
          draggable="true"
          @dragstart="onDragStart($event, contact.id)"
        >
          {{ contact.full_name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapMutations } from 'vuex';

export default defineComponent({
  name: 'KanbanView',
  data() {
    return {
      draggedContactId: null,
    };
  },
  computed: {
    ...mapState({
      stages: (state: any) => state.stages.stages,
      contacts: (state: any) => state.contacts.contacts,
    }),
    filteredContacts() {
      return (stageId: string) =>
        this.contacts.filter((contact: any) => contact.stage === stageId);
    },
  },
  methods: {
    ...mapMutations(['moveContact']),
    onDragStart(event: DragEvent, contactId: any) {
      this.draggedContactId = contactId;
    },
    onDrop(event: DragEvent, newStageId: string) {
      if (this.draggedContactId) {
        this.moveContact({ contactId: this.draggedContactId, newStageId });
        this.draggedContactId = null;
      }
    },
    onDragOver(event: DragEvent) {
      event.preventDefault();
    },
  },
});
</script>

<style scoped>
.kanban {
  display: flex;
}
.kanban-title {
  padding: 1rem;
  font-size: 16px;
  height: 60px;
  background: #fff;
  margin: 0;
}
.kanban-column {
  width: 200px;
  margin: 0 10px;
  border: 1px solid #ddd;
}
.kanban-cards {
  min-height: 100%;
  border: 1px solid #ccc;
}
.kanban-card {
  padding: 10px;
  margin-bottom: 10px;
  background: #fff;
}
</style>
