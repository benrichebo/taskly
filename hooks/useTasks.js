import { useEffect, useState } from "react";
import { GET } from "../functions/GET";
import { POST } from "../functions/POST";
import { PUT } from "../functions/PUT";
import { useStorage } from "./useStorage";

export const useTasks = (type) => {
  const { sessionStorage } = useStorage("session");

  const [tasks, setTasks] = useState(null);
  const [pinnedTasks, setPinnedTasks] = useState(null);
  const [taskData, setTaskData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  const task = {
    async getTasks() {
      setLoading(true);
      try {
        const data = await GET("/api/tasks");
        console.log("data", data);
        if (data?.msg) {
          setError(data.msg);
        } else {
          sessionStorage.setItem("tasks", data);
          setTasks(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async getTask(id) {
      setLoading(true);
      try {
        const data = await GET(`/api/task/${id}`);
        if (data.msg) {
          setError(data.msg);
        } else {
          sessionStorage.setItem("task", data);
          setTaskData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async addTask(credentials) {
      setError("");
      setLoading(true);
      try {
        const data = await POST(credentials, "/api/tasks/add-task");
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          this.getTasks();
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async pinTask(id) {
      setError("");
      setLoading(true);
      try {
        const data = await PUT(id, "/api/tasks/pinned");
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          this.getPinnedTasks();
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async getPinnedTasks() {
      setLoading(true);
      try {
        const data = await GET("/api/tasks/pinned");
        if (data?.msg) {
          setError(data.msg);
        } else {
          sessionStorage.setItem("pinned-tasks", data);
          setTasks(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async deletePinTask(id) {
      setError("");
      setLoading(true);
      try {
        const data = await DELETE(id, "/api/tasks/pinned");
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          sessionStorage.setItem("pinned-task", data);
          this.getPinnedTasks();
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async updateTask(credentials) {
      setLoading(true);
      const data = await PUT(credentials, `/api/tasks/${credentials?.id}`);
      if (data.msg.includes("successfully")) {
        setMessage(data.msg);
      } else {
        setError(data.msg);
      }
      setLoading(false);
    },

    async deleteTask(id) {
      setLoading(true);
      const data = await DELETE(credentials, `/api/tasks/${id}`);
      if (data.msg.includes("successfully")) {
        setMessage(data.msg);
      } else {
        setError(data.msg);
      }
      setLoading(false);
    },
  };

  useEffect(() => {
    if (type == "tasks") {
      const data = sessionStorage.getItem("tasks");
      console.log("data", data);
      if (!data) {
        task.getTasks();
      } else {
        setTasks(data);
      }
    }

    if (type == "task") {
      const data = sessionStorage.getItem("task");
      if (!data) {
        task.getTask();
      } else {
        setTaskData(data);
      }
    }

    if (type == "pinned-tasks") {
      const data = sessionStorage.getItem("pinned-tasks");
      if (!data) {
        task.getPinnedTasks();
      } else {
        setPinnedTasks(data);
      }
    }
  }, []);

  return { task, loading, data: tasks, taskData, pinnedTasks, error, message };
};
